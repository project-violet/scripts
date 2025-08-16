// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 1023:
case 1280:
case 128:
case 2392:
case 1572:
case 3448:
case 3657:
case 132:
case 1600:
case 3332:
case 2244:
case 1382:
case 543:
case 2804:
case 3614:
case 229:
case 54:
case 2420:
case 242:
case 1869:
case 1950:
case 1084:
case 413:
case 3034:
case 1385:
case 2141:
case 2485:
case 1449:
case 2719:
case 2040:
case 1495:
case 1970:
case 1575:
case 2751:
case 376:
case 1027:
case 3679:
case 3653:
case 3659:
case 3673:
case 423:
case 1908:
case 3611:
case 2568:
case 2144:
case 3909:
case 585:
case 636:
case 1658:
case 1510:
case 476:
case 74:
case 3130:
case 313:
case 1678:
case 2754:
case 971:
case 770:
case 587:
case 3903:
case 31:
case 3105:
case 1070:
case 462:
case 430:
case 3007:
case 897:
case 3533:
case 4009:
case 294:
case 1741:
case 64:
case 4003:
case 895:
case 1050:
case 105:
case 736:
case 1171:
case 3934:
case 2459:
case 1311:
case 98:
case 1274:
case 832:
case 860:
case 3146:
case 1524:
case 983:
case 3756:
case 1254:
case 2542:
case 3218:
case 3202:
case 2991:
case 2457:
case 947:
case 3003:
case 3842:
case 1587:
case 1357:
case 569:
case 2780:
case 278:
case 1981:
case 1015:
case 3620:
case 4007:
case 3300:
case 2888:
case 1314:
case 2616:
case 3465:
case 179:
case 1790:
case 851:
case 1012:
case 3893:
case 3685:
case 1521:
case 1271:
case 687:
case 2833:
case 3845:
case 1251:
case 2725:
case 3899:
case 3096:
case 1094:
case 2225:
case 1719:
case 1040:
case 3705:
case 2970:
case 894:
case 3567:
case 1349:
case 1343:
case 295:
case 2385:
case 1662:
case 1141:
case 1713:
case 2443:
case 2600:
case 260:
case 381:
case 1665:
case 2382:
case 129:
case 53:
case 1804:
case 2029:
case 1482:
case 3176:
case 533:
case 3316:
case 3432:
case 1420:
case 142:
case 2863:
case 2280:
case 2023:
case 1392:
case 2572:
case 3256:
case 2180:
case 3563:
case 1347:
case 73:
case 119:
case 3569:
case 3964:
case 251:
case 2081:
case 733:
case 1936:
case 2908:
case 3855:
case 1241:
case 2912:
case 1568:
case 2125:
case 2867:
case 2027:
case 3887:
case 3478:
case 3598:
case 829:
case 2274:
case 2966:
case 3458:
case 768:
case 842:
case 2524:
case 1411:
case 633:
case 2741:
case 746:
case 2373:
case 2113:
case 1593:
case 3061:
case 3821:
case 63:
case 1459:
case 2171:
case 804:
case 1599:
case 316:
case 4064:
case 440:
case 2379:
case 2119:
case 1940:
case 194:
case 1545:
case 1833:
case 3260:
case 326:
case 3695:
case 2219:
case 2927:
case 2012:
case 546:
case 2213:
case 2521:
case 992:
case 1839:
case 1036:
case 2271:
case 3086:
case 3889:
case 2015:
case 2632:
case 3064:
case 3365:
case 935:
case 2117:
case 2744:
case 1477:
case 1616:
case 279:
case 2790:
case 340:
case 3400:
case 1457:
case 37:
case 3692:
case 373:
case 3730:
case 1722:
case 520:
case 2587:
case 937:
case 2154:
case 710:
case 1780:
case 584:
case 3737:
case 258:
case 2011:
case 2522:
case 3361:
case 145:
case 2856:
case 2272:
case 159:
case 1590:
case 2053:
case 1995:
case 1470:
case 147:
case 1544:
case 2079:
case 2110:
case 211:
case 1992:
case 3948:
case 1721:
case 4062:
case 59:
case 2920:
case 292:
case 2525:
case 593:
case 3916:
case 2275:
case 3733:
case 2745:
case 650:
case 1947:
case 1783:
case 3409:
case 3065:
case 2799:
case 905:
case 3825:
case 3167:
case 2057:
case 907:
case 2155:
case 1541:
case 1724:
case 3269:
case 3226:
case 2152:
case 364:
case 3640:
case 221:
case 2210:
case 3496:
case 3576:
case 3386:
case 2742:
case 1412:
case 1336:
case 3062:
case 2436:
case 1830:
case 2312:
case 2366:
case 2329:
case 3819:
case 2609:
case 2082:
case 1245:
case 50:
case 1429:
case 286:
case 2020:
case 1664:
case 2121:
case 2289:
case 2768:
case 3871:
case 1423:
case 1092:
case 1293:
case 1846:
case 2494:
case 2574:
case 918:
case 847:
case 1206:
case 456:
case 2440:
case 1710:
case 1340:
case 134:
case 1095:
case 1484:
case 2973:
case 1686:
case 561:
case 2959:
case 1242:
case 951:
case 2085:
case 3298:
case 2384:
case 1818:
case 2187:
case 761:
case 960:
case 3854:
case 88:
case 3198:
case 883:
case 4048:
case 2124:
case 2607:
case 2138:
case 1752:
case 1297:
case 2513:
case 2189:
case 2957:
case 1193:
case 2914:
case 3965:
case 2381:
case 70:
case 2183:
case 1982:
case 3058:
case 802:
case 3201:
case 1255:
case 3078:
case 2470:
case 2995:
case 259:
case 1053:
case 2590:
case 844:
case 1252:
case 1797:
case 2544:
case 1876:
case 1079:
case 3104:
case 3307:
case 978:
case 1110:
case 782:
case 1580:
case 158:
case 1350:
case 135:
case 3935:
case 706:
case 2787:
case 2943:
case 35:
case 2450:
case 245:
case 1856:
case 1059:
case 28:
case 3798:
case 1742:
case 1634:
case 1436:
case 1628:
case 1312:
case 1172:
case 1308:
case 3684:
case 4058:
case 2724:
case 2738:
case 3890:
case 389:
case 121:
case 3844:
case 453:
case 3623:
case 2268:
case 3303:
case 45:
case 3464:
case 1745:
case 2415:
case 2783:
case 3309:
case 1077:
case 1175:
case 300:
case 3000:
case 835:
case 2484:
case 858:
case 919:
case 1959:
case 3763:
case 3137:
case 1085:
case 2242:
case 3612:
case 3328:
case 2818:
case 2049:
case 0:
case 1574:
case 2206:
case 1440:
case 144:
case 3288:
case 2340:
case 234:
case 1953:
case 1979:
case 1121:
case 3239:
case 1323:
case 2092:
case 2293:
case 1366:
case 2299:
case 2429:
case 1283:
case 1020:
case 2805:
case 102:
case 1914:
case 2199:
case 3900:
case 606:
case 2145:
case 682:
case 1221:
case 1513:
case 1189:
case 2391:
case 4035:
case 1957:
case 1571:
case 2755:
case 2427:
case 1124:
case 3546:
case 3188:
case 1607:
case 1138:
case 367:
case 2752:
case 3670:
case 2297:
case 2772:
case 365:
case 3502:
case 3518:
case 2142:
case 596:
case 3541:
case 1739:
case 2623:
case 3789:
case 2303:
case 1167:
case 2000:
case 798:
case 200:
case 1364:
case 1065:
case 1409:
case 2629:
case 459:
case 3783:
case 856:
case 3947:
case 2464:
case 1733:
case 2666:
case 383:
case 1263:
case 2486:
case 1822:
case 2684:
case 574:
case 188:
case 3336:
case 38:
case 3408:
case 3412:
case 727:
case 515:
case 1496:
case 1640:
case 725:
case 164:
case 3738:
case 1226:
case 2396:
case 1269:
case 525:
case 3949:
case 2104:
case 3995:
case 3470:
case 359:
case 552:
case 1163:
case 774:
case 25:
case 345:
case 3450:
case 527:
case 717:
case 731:
case 930:
case 962:
case 1916:
case 598:
case 3721:
case 483:
case 48:
case 2201:
case 1948:
case 864:
case 2670:
case 1874:
case 923:
case 4092:
case 888:
case 3142:
case 2237:
case 2650:
case 2518:
case 1854:
case 434:
case 3047:
case 1431:
case 617:
case 2133:
case 3481:
case 3145:
case 2900:
case 290:
case 2505:
case 2767:
case 2331:
case 674:
case 1560:
case 1965:
case 471:
case 976:
case 2139:
case 3293:
case 1048:
case 625:
case 2239:
case 3466:
case 2615:
case 3805:
case 2032:
case 3664:
case 3245:
case 1851:
case 2233:
case 1819:
case 3043:
case 2328:
case 3802:
case 3818:
case 2035:
case 2334:
case 3242:
case 1298:
case 1636:
case 2763:
case 698:
case 2726:
case 91:
case 4047:
case 3340:
case 3095:
case 2769:
case 371:
case 3049:
case 3846:
case 1704:
case 1844:
case 2694:
case 3210:
case 264:
case 1890:
case 1204:
case 3152:
case 1396:
case 2788:
case 3312:
case 3628:
case 1684:
case 3308:
case 2062:
case 3634:
case 2880:
case 541:
case 5:
case 3742:
case 2364:
case 2825:
case 2409:
case 2065:
case 3799:
case 614:
case 411:
case 1629:
case 4053:
case 1309:
case 677:
case 1666:
case 2739:
case 675:
case 4073:
case 1303:
case 2403:
case 3155:
case 435:
case 1101:
case 599:
case 1841:
case 926:
case 1201:
case 2948:
case 2267:
case 680:
case 421:
case 624:
case 1058:
case 1932:
case 392:
case 3920:
case 3525:
case 3982:
case 3059:
case 741:
case 940:
case 3272:
case 1461:
case 3073:
case 335:
case 3350:
case 2361:
case 358:
case 3580:
case 311:
case 3110:
case 4014:
case 4077:
case 3370:
case 609:
case 1104:
case 2407:
case 2126:
case 3252:
case 3876:
case 2169:
case 4085:
case 1139:
case 3513:
case 3183:
case 800:
case 1900:
case 190:
case 3381:
case 3977:
case 641:
case 2965:
case 256:
case 444:
case 2560:
case 577:
case 2198:
case 1237:
case 1650:
case 1502:
case 724:
case 165:
case 1518:
case 780:
case 981:
case 889:
case 4082:
case 486:
case 1670:
case 1546:
case 4020:
case 402:
case 2817:
case 2874:
case 575:
case 3979:
case 1288:
case 3494:
case 2704:
case 1328:
case 3187:
case 1608:
case 3384:
case 3911:
case 777:
case 1763:
case 714:
case 3959:
case 2434:
case 524:
case 2428:
case 3020:
case 2851:
case 3082:
case 3329:
case 3609:
case 2016:
case 3366:
case 3603:
case 1978:
case 1239:
case 3121:
case 3289:
case 766:
case 3908:
case 2855:
case 3912:
case 2986:
case 428:
case 4029:
case 4066:
case 432:
case 3027:
case 1996:
case 460:
case 2563:
case 3180:
case 113:
case 1130:
case 2872:
case 3678:
case 3658:
case 2276:
case 2964:
case 3915:
case 2852:
case 3081:
case 862:
case 1909:
case 2432:
case 3066:
case 3826:
case 3029:
case 2176:
case 2316:
case 1416:
case 4027:
case 332:
case 281:
case 3552:
case 548:
case 2810:
case 1657:
case 539:
case 12:
case 2702:
case 3572:
case 1448:
case 328:
case 3280:
case 2348:
case 3023:
case 123:
case 1907:
case 176:
case 3575:
case 2705:
case 3225:
case 566:
case 2435:
case 3443:
case 3385:
case 1034:
case 1868:
case 2961:
case 956:
case 1028:
case 3555:
case 3084:
case 1335:
case 395:
case 3790:
case 2400:
case 240:
case 1246:
case 1009:
case 1465:
case 2365:
case 1931:
case 407:
case 3377:
case 3117:
case 1620:
case 3015:
case 162:
case 3981:
case 3632:
case 130:
case 1537:
case 3154:
case 405:
case 3357:
case 813:
case 27:
case 1003:
case 2692:
case 1096:
case 2649:
case 1899:
case 3927:
case 3251:
case 2883:
case 3271:
case 2889:
case 1462:
case 3012:
case 2643:
case 2821:
case 3171:
case 305:
case 2061:
case 1928:
case 3373:
case 3113:
case 3359:
case 3741:
case 3353:
case 3379:
case 876:
case 4015:
case 3151:
case 2160:
case 1007:
case 216:
case 307:
case 3070:
case 2478:
case 3254:
case 1756:
case 823:
case 554:
case 1378:
case 2887:
case 1146:
case 1588:
case 1358:
case 3538:
case 3217:
case 2647:
case 1897:
case 2031:
case 3774:
case 1964:
case 1276:
case 4094:
case 3347:
case 1526:
case 873:
case 2903:
case 1563:
case 512:
case 1872:
case 213:
case 2130:
case 442:
case 2679:
case 826:
case 66:
case 3801:
case 2611:
case 1855:
case 1986:
case 663:
case 3936:
case 591:
case 4091:
case 3713:
case 3141:
case 3485:
case 3662:
case 2034:
case 990:
case 2868:
case 3771:
case 2028:
case 3343:
case 2907:
case 2760:
case 304:
case 3040:
case 3094:
case 419:
case 3719:
case 967:
case 22:
case 522:
case 1718:
case 549:
case 1156:
case 557:
case 2230:
case 223:
case 1432:
case 538:
case 342:
case 3420:
case 555:
case 3482:
case 1746:
case 3665:
case 3804:
case 965:
case 329:
case 2332:
case 181:
case 3244:
case 3839:
case 2462:
case 2893:
case 1643:
case 1649:
case 126:
case 612:
case 2205:
case 378:
case 1730:
case 173:
case 3722:
case 17:
case 2842:
case 2003:
case 3457:
case 1400:
case 140:
case 3414:
case 3597:
case 494:
case 3616:
case 2009:
case 95:
case 2682:
case 1365:
case 56:
case 2931:
case 1838:
case 2620:
case 262:
case 2300:
case 230:
case 2588:
case 1458:
case 1647:
case 3506:
case 2776:
case 76:
case 1598:
case 1478:
case 2756:
case 989:
case 3837:
case 2102:
case 1887:
case 2378:
case 3545:
case 3940:
case 3599:
case 3479:
case 2007:
case 116:
case 2105:
case 622:
case 3453:
case 701:
case 3593:
case 3473:
case 2928:
case 478:
case 1061:
case 638:
case 655:
case 3743:
case 3111:
case 3371:
case 794:
case 2063:
case 2823:
case 2262:
case 2829:
case 1460:
case 2026:
case 3319:
case 3153:
case 2866:
case 3795:
case 1625:
case 619:
case 3749:
case 1531:
case 3351:
case 236:
case 1004:
case 2360:
case 2418:
case 3792:
case 3257:
case 363:
case 1178:
case 2884:
case 1622:
case 1318:
case 1680:
case 168:
case 2732:
case 3527:
case 1346:
case 4052:
case 1200:
case 120:
case 2644:
case 1894:
case 2446:
case 578:
case 1840:
case 184:
case 2690:
case 2265:
case 3983:
case 3747:
case 1258:
case 1933:
case 778:
case 2067:
case 2827:
case 2165:
case 3177:
case 4010:
case 3114:
case 83:
case 906:
case 3584:
case 3157:
case 3354:
case 1001:
case 3989:
case 3279:
case 3052:
case 3938:
case 642:
case 3924:
case 3566:
case 629:
case 2641:
case 3211:
case 2998:
case 3072:
case 3259:
case 594:
case 2116:
case 4024:
case 884:
case 287:
case 1596:
case 2850:
case 729:
case 2778:
case 3508:
case 1654:
case 2356:
case 3910:
case 391:
case 1904:
case 846:
case 449:
case 2926:
case 2969:
case 2963:
case 678:
case 1503:
case 1135:
case 3087:
case 455:
case 4021:
case 1762:
case 1613:
case 3605:
case 3038:
case 3864:
case 3325:
case 3024:
case 1088:
case 1836:
case 1039:
case 719:
case 13:
case 529:
case 2430:
case 243:
case 355:
case 133:
case 3602:
case 3955:
case 24:
case 3618:
case 2808:
case 2561:
case 3322:
case 542:
case 2248:
case 4087:
case 2216:
case 2967:
case 2700:
case 3570:
case 270:
case 3975:
case 491:
case 3646:
case 1507:
case 3444:
case 3220:
case 1033:
case 810:
case 3282:
case 3782:
case 1644:
case 220:
case 1446:
case 2716:
case 887:
case 1418:
case 885:
case 1402:
case 3828:
case 1884:
case 2318:
case 2178:
case 3068:
case 2680:
case 1026:
case 3451:
case 3997:
case 651:
case 2305:
case 993:
case 3419:
case 2531:
case 705:
case 136:
case 1360:
case 3413:
case 1735:
case 3785:
case 2937:
case 618:
case 507:
case 3942:
case 1998:
case 4068:
case 3906:
case 505:
case 660:
case 2528:
case 2534:
case 3656:
case 2939:
case 695:
case 779:
case 2258:
case 3540:
case 2933:
case 2100:
case 1827:
case 1963:
case 3773:
case 797:
case 1564:
case 1926:
case 3753:
case 1969:
case 1850:
case 185:
case 1778:
case 2654:
case 2456:
case 551:
case 3536:
case 4042:
case 3192:
case 518:
case 4006:
case 1758:
case 869:
case 466:
case 1870:
case 187:
case 2596:
case 2674:
case 718:
case 1216:
case 1700:
case 170:
case 2765:
case 3099:
case 2507:
case 3777:
case 528:
case 2232:
case 348:
case 560:
case 3480:
case 532:
case 1430:
case 3093:
case 1812:
case 233:
case 14:
case 2901:
case 751:
case 3757:
case 1248:
case 595:
case 3425:
case 3249:
case 2651:
case 3660:
case 366:
case 2762:
case 597:
case 3803:
case 3042:
case 1811:
case 786:
case 2918:
case 2902:
case 2946:
case 2675:
case 621:
case 1853:
case 2231:
case 2134:
case 375:
case 2672:
case 2761:
case 3487:
case 3041:
case 1437:
case 409:
case 3194:
case 4090:
case 806:
case 1565:
case 196:
case 1960:
case 1707:
case 3858:
case 377:
case 3770:
case 250:
case 3240:
case 2388:
case 2558:
case 261:
case 2610:
case 3669:
case 3438:
case 3424:
case 1398:
case 3342:
case 2786:
case 2234:
case 3663:
case 1857:
case 3712:
case 3090:
case 309:
case 3345:
case 414:
case 637:
case 2131:
case 477:
case 3715:
case 1433:
case 475:
case 1668:
case 2030:
case 3489:
case 203:
case 635:
case 2624:
case 1882:
case 2426:
case 2304:
case 1060:
case 2638:
case 182:
case 758:
case 3832:
case 3410:
case 2296:
case 499:
case 3698:
case 1642:
case 2892:
case 2463:
case 1286:
case 737:
case 910:
case 1728:
case 3784:
case 3236:
case 1161:
case 1645:
case 1976:
case 1699:
case 1885:
case 1693:
case 2018:
case 3723:
case 1956:
case 29:
case 1401:
case 592:
case 2301:
case 3543:
case 2535:
case 3549:
case 2467:
case 399:
case 2109:
case 2687:
case 1548:
case 920:
case 721:
case 1186:
case 1261:
case 984:
case 3452:
case 558:
case 686:
case 602:
case 2847:
case 1516:
case 2196:
case 968:
case 2532:
case 3227:
case 3919:
case 296:
case 2960:
case 94:
case 3514:
case 3951:
case 3577:
case 1652:
case 150:
case 1905:
case 771:
case 970:
case 3971:
case 1134:
case 1672:
case 4080:
case 408:
case 1761:
case 3913:
case 734:
case 1946:
case 1675:
case 2853:
case 1231:
case 2879:
case 2873:
case 683:
case 3321:
case 2811:
case 1918:
case 1902:
case 1655:
case 3223:
case 645:
case 3511:
case 2439:
case 1030:
case 89:
case 10:
case 893:
case 3389:
case 1339:
case 3559:
case 2709:
case 3579:
case 3974:
case 1131:
case 3917:
case 3445:
case 3229:
case 3181:
case 2398:
case 1234:
case 1786:
case 2857:
case 987:
case 3442:
case 1498:
case 1578:
case 3406:
case 3127:
case 2796:
case 3865:
case 3324:
case 3604:
case 2814:
case 985:
case 1558:
case 3338:
case 3025:
case 1610:
case 2488:
case 2885:
case 1203:
case 2693:
case 1002:
case 1018:
case 1689:
case 425:
case 2956:
case 3633:
case 427:
case 1895:
case 2645:
case 2976:
case 1683:
case 1849:
case 2642:
case 3013:
case 747:
case 2734:
case 1463:
case 2286:
case 3150:
case 4054:
case 315:
case 2882:
case 1624:
case 3051:
case 3688:
case 1107:
case 2060:
case 58:
case 2820:
case 1005:
case 331:
case 4074:
case 3170:
case 317:
case 3740:
case 850:
case 1296:
case 2369:
case 2404:
case 3794:
case 745:
case 2606:
case 3019:
case 583:
case 861:
case 2697:
case 78:
case 1196:
case 545:
case 3582:
case 783:
case 3637:
case 547:
case 3108:
case 2261:
case 969:
case 3250:
case 2731:
case 634:
case 3017:
case 4051:
case 3115:
case 2164:
case 671:
case 803:
case 1103:
case 19:
case 3791:
case 4013:
case 3585:
case 3980:
case 3922:
case 4071:
case 3355:
case 1535:
case 1712:
case 1708:
case 3857:
case 912:
case 2736:
case 2284:
case 1663:
case 3398:
case 1342:
case 3488:
case 1306:
case 1438:
case 1669:
case 4076:
case 2338:
case 1800:
case 180:
case 2865:
case 2127:
case 2604:
case 765:
case 653:
case 2559:
case 2389:
case 2573:
case 1393:
case 1489:
case 2022:
case 65:
case 3668:
case 991:
case 3439:
case 2445:
case 1715:
case 496:
case 3433:
case 899:
case 2181:
case 2266:
case 1399:
case 1483:
case 2917:
case 1044:
case 109:
case 2553:
case 1090:
case 1345:
case 2129:
case 3853:
case 2166:
case 1667:
case 689:
case 1291:
case 3811:
case 3056:
case 3859:
case 1421:
case 590:
case 3873:
case 938:
case 841:
case 1770:
case 3960:
case 396:
case 1194:
case 8:
case 2919:
case 600:
case 1140:
case 2227:
case 567:
case 3437:
case 2913:
case 1750:
case 175:
case 957:
case 199:
case 1475:
case 2115:
case 2375:
case 406:
case 482:
case 3731:
case 2074:
case 1543:
case 2355:
case 901:
case 700:
case 2791:
case 3401:
case 1455:
case 2925:
case 2352:
case 1727:
case 55:
case 3697:
case 824:
case 553:
case 1452:
case 880:
case 3261:
case 3548:
case 3186:
case 2372:
case 2108:
case 2637:
case 3161:
case 1236:
case 1784:
case 2071:
case 2208:
case 3363:
case 3642:
case 3404:
case 3326:
case 2794:
case 2816:
case 3606:
case 75:
case 1410:
case 2740:
case 274:
case 877:
case 3369:
case 382:
case 231:
case 2310:
case 217:
case 2170:
case 2051:
case 3882:
case 2688:
case 3060:
case 306:
case 3693:
case 3885:
case 3264:
case 1729:
case 667:
case 2215:
case 2633:
case 3645:
case 2715:
case 1445:
case 1229:
case 2399:
case 1579:
case 1383:
case 209:
case 3333:
case 2345:
case 1559:
case 2191:
case 898:
case 3339:
case 1493:
case 2489:
case 2393:
case 303:
case 1080:
case 1511:
case 1954:
case 2626:
case 2424:
case 1338:
case 3558:
case 1025:
case 280:
case 1865:
case 827:
case 224:
case 2712:
case 2708:
case 3578:
case 825:
case 1284:
case 1736:
case 3228:
case 2342:
case 3786:
case 40:
case 2041:
case 1913:
case 815:
case 2750:
case 3672:
case 275:
case 3761:
case 1184:
case 4030:
case 1557:
case 403:
case 3337:
case 874:
case 350:
case 2770:
case 3652:
case 3500:
case 1514:
case 1919:
case 2397:
case 817:
case 948:
case 1227:
case 966:
case 3655:
case 2291:
case 1601:
case 2421:
case 688:
case 1129:
case 1281:
case 3231:
case 3675:
case 664:
case 461:
case 3946:
case 1250:
case 764:
case 2472:
case 1112:
case 1108:
case 3687:
case 1637:
case 1520:
case 788:
case 1925:
case 1352:
case 1270:
case 127:
case 3847:
case 3207:
case 1922:
case 3535:
case 1355:
case 393:
case 3930:
case 1980:
case 198:
case 1585:
case 3301:
case 3103:
case 39:
case 2944:
case 3467:
case 2990:
case 2595:
case 2781:
case 1017:
case 1074:
case 3209:
case 3849:
case 1215:
case 3683:
case 1633:
case 3895:
case 1639:
case 2723:
case 3843:
case 3002:
case 2368:
case 174:
case 2410:
case 588:
case 3296:
case 3005:
case 3638:
case 117:
case 2832:
case 3624:
case 3107:
case 115:
case 2784:
case 3463:
case 1071:
case 493:
case 564:
case 49:
case 954:
case 2941:
case 1212:
case 2698:
case 1013:
case 838:
case 740:
case 941:
case 1354:
case 3534:
case 3001:
case 3528:
case 1055:
case 773:
case 1374:
case 1177:
case 2999:
case 1075:
case 3100:
case 2540:
case 2945:
case 857:
case 2594:
case 1747:
case 3258:
case 2676:
case 468:
case 2942:
case 1211:
case 1523:
case 516:
case 3891:
case 726:
case 2906:
case 484:
case 681:
case 2831:
case 3988:
case 3531:
case 2419:
case 3305:
case 101:
case 1153:
case 346:
case 2451:
case 1319:
case 1313:
case 2471:
case 2591:
case 1159:
case 2785:
case 1371:
case 2413:
case 1743:
case 4001:
case 1277:
case 3840:
case 812:
case 320:
case 3716:
case 2782:
case 3346:
case 57:
case 272:
case 3158:
case 368:
case 2828:
case 163:
case 3318:
case 3622:
case 16:
case 3748:
case 1792:
case 2660:
case 3088:
case 1605:
case 1952:
case 1325:
case 1864:
case 2249:
case 2006:
case 2042:
case 1285:
case 3235:
case 2243:
case 1972:
case 3033:
case 239:
case 2390:
case 1282:
case 2344:
case 3232:
case 1220:
case 2896:
case 3765:
case 1646:
case 1444:
case 975:
case 3507:
case 1975:
case 1570:
case 2292:
case 1380:
case 1955:
case 2093:
case 4037:
case 333:
case 1550:
case 3330:
case 33:
case 1886:
case 2480:
case 581:
case 248:
case 3039:
case 914:
case 2536:
case 781:
case 980:
case 2968:
case 1021:
case 1861:
case 626:
case 2807:
case 3617:
case 1120:
case 1185:
case 1441:
case 2143:
case 3135:
case 673:
case 2341:
case 801:
case 4033:
case 3509:
case 3904:
case 1515:
case 191:
case 2529:
case 1831:
case 2279:
case 2052:
case 2938:
case 623:
case 2211:
case 3998:
case 3641:
case 839:
case 2075:
case 436:
case 1945:
case 1540:
case 2747:
case 1474:
case 2983:
case 1594:
case 1454:
case 974:
case 2354:
case 2157:
case 917:
case 848:
case 730:
case 931:
case 762:
case 1993:
case 2584:
case 2921:
case 2630:
case 1828:
case 263:
case 26:
case 3402:
case 2257:
case 927:
case 2792:
case 530:
case 925:
case 3690:
case 2527:
case 1782:
case 172:
case 2313:
case 1591:
case 2159:
case 613:
case 2111:
case 1413:
case 3735:
case 2351:
case 1419:
case 3360:
case 4067:
case 336:
case 2581:
case 998:
case 3405:
case 3026:
case 2179:
case 2319:
case 1757:
case 3248:
case 2380:
case 238:
case 2550:
case 2602:
case 255:
case 2955:
case 34:
case 2322:
case 3561:
case 1422:
case 2089:
case 3430:
case 1480:
case 148:
case 139:
case 1390:
case 1344:
case 1099:
case 1896:
case 713:
case 1714:
case 2444:
case 3967:
case 370:
case 3700:
case 2490:
case 576:
case 2285:
case 1042:
case 1803:
case 2024:
case 166:
case 2952:
case 2605:
case 2864:
case 1249:
case 1753:
case 3926:
case 1779:
case 1149:
case 470:
case 908:
case 2185:
case 2441:
case 1711:
case 1143:
case 776:
case 1759:
case 2182:
case 51:
case 1807:
case 212:
case 2120:
case 72:
case 3758:
case 387:
case 3870:
case 872:
case 723:
case 3148:
case 1192:
case 3586:
case 1536:
case 2021:
case 1968:
case 2512:
case 2508:
case 2861:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755367201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,];
var gg_b = "1755367201/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
