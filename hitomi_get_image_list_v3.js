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
case 283:
case 1762:
case 984:
case 2260:
case 3941:
case 1124:
case 793:
case 1290:
case 2139:
case 1222:
case 2720:
case 2001:
case 1476:
case 1076:
case 2888:
case 1773:
case 2011:
case 3960:
case 3891:
case 3357:
case 195:
case 1277:
case 274:
case 938:
case 3676:
case 973:
case 1883:
case 2474:
case 2074:
case 4084:
case 2144:
case 1684:
case 1761:
case 384:
case 2686:
case 1117:
case 1146:
case 864:
case 3084:
case 70:
case 678:
case 3820:
case 1107:
case 1370:
case 2367:
case 740:
case 1885:
case 2012:
case 2412:
case 1851:
case 741:
case 701:
case 1397:
case 399:
case 1775:
case 2489:
case 373:
case 9:
case 15:
case 338:
case 1987:
case 1740:
case 4079:
case 3218:
case 167:
case 3593:
case 2839:
case 2188:
case 3956:
case 3208:
case 3191:
case 54:
case 50:
case 1581:
case 644:
case 1183:
case 1435:
case 3048:
case 540:
case 3680:
case 3301:
case 2908:
case 541:
case 501:
case 2256:
case 2826:
case 524:
case 1959:
case 2057:
case 2457:
case 1913:
case 3374:
case 1553:
case 1519:
case 1269:
case 3192:
case 1433:
case 1736:
case 1623:
case 1185:
case 3849:
case 1996:
case 1509:
case 1151:
case 2734:
case 2384:
case 579:
case 3023:
case 3423:
case 907:
case 2628:
case 947:
case 3633:
case 2038:
case 2438:
case 2994:
case 593:
case 3312:
case 2697:
case 617:
case 1729:
case 3302:
case 1817:
case 1667:
case 1846:
case 3999:
case 407:
case 447:
case 3294:
case 208:
case 3547:
case 248:
case 3266:
case 3120:
case 1807:
case 3471:
case 537:
case 1864:
case 1614:
case 3949:
case 33:
case 3244:
case 1187:
case 2894:
case 2616:
case 2647:
case 670:
case 3014:
case 3414:
case 2866:
case 3004:
case 574:
case 1665:
case 3570:
case 4072:
case 1538:
case 3545:
case 708:
case 2944:
case 3465:
case 652:
case 330:
case 1907:
case 665:
case 2131:
case 4027:
case 1946:
case 3528:
case 2453:
case 3658:
case 2019:
case 1917:
case 93:
case 2234:
case 3856:
case 3226:
case 1437:
case 2939:
case 3072:
case 3472:
case 431:
case 1236:
case 430:
case 4065:
case 919:
case 3027:
case 3637:
case 2926:
case 2455:
case 2808:
case 3934:
case 2535:
case 2481:
case 3766:
case 3063:
case 3463:
case 2668:
case 713:
case 3543:
case 419:
case 930:
case 1803:
case 1859:
case 1663:
case 1698:
case 3141:
case 1930:
case 1589:
case 394:
case 24:
case 729:
case 697:
case 423:
case 1105:
case 1790:
case 3978:
case 3920:
case 2831:
case 1512:
case 3199:
case 2760:
case 1951:
case 1164:
case 3382:
case 3732:
case 869:
case 224:
case 1196:
case 3992:
case 1722:
case 1887:
case 513:
case 2365:
case 2220:
case 241:
case 3353:
case 1273:
case 389:
case 3586:
case 279:
case 994:
case 2372:
case 628:
case 2576:
case 1103:
case 1511:
case 1261:
case 176:
case 489:
case 1501:
case 774:
case 3991:
case 1275:
case 3860:
case 2988:
case 2742:
case 2363:
case 2398:
case 1952:
case 3381:
case 853:
case 1410:
case 1010:
case 1983:
case 1393:
case 989:
case 122:
case 185:
case 1400:
case 1000:
case 1721:
case 2716:
case 3618:
case 2413:
case 2013:
case 2059:
case 1771:
case 335:
case 127:
case 3893:
case 2747:
case 661:
case 686:
case 3608:
case 2003:
case 2403:
case 1881:
case 1855:
case 1008:
case 2243:
case 2795:
case 1341:
case 3280:
case 2935:
case 3758:
case 2656:
case 564:
case 1654:
case 732:
case 139:
case 2245:
case 1223:
case 1853:
case 1809:
case 2270:
case 3549:
case 3737:
case 3387:
case 1772:
case 2005:
case 2405:
case 3469:
case 2699:
case 3233:
case 2858:
case 1882:
case 2015:
case 1938:
case 2297:
case 3945:
case 1494:
case 435:
case 1094:
case 110:
case 3970:
case 1342:
case 1066:
case 1466:
case 1763:
case 2933:
case 1267:
case 3806:
case 3694:
case 2321:
case 1507:
case 2768:
case 2793:
case 3847:
case 3359:
case 205:
case 2800:
case 1974:
case 2810:
case 3490:
case 3090:
case 2660:
case 946:
case 906:
case 4021:
case 1911:
case 2976:
case 1690:
case 3477:
case 3077:
case 1622:
case 1432:
case 1032:
case 3632:
case 1181:
case 3276:
case 1356:
case 893:
case 406:
case 166:
case 0:
case 1284:
case 840:
case 1399:
case 801:
case 1989:
case 1530:
case 2087:
case 657:
case 180:
case 1450:
case 1912:
case 2286:
case 824:
case 2369:
case 306:
case 346:
case 3315:
case 3116:
case 3650:
case 1551:
case 1109:
case 1621:
case 1431:
case 84:
case 80:
case 764:
case 2158:
case 3986:
case 3396:
case 18:
case 3195:
case 3364:
case 532:
case 3700:
case 1182:
case 190:
case 3307:
case 3170:
case 769:
case 402:
case 442:
case 3346:
case 3462:
case 3145:
case 2692:
case 191:
case 3317:
case 2531:
case 3542:
case 4040:
case 612:
case 2451:
case 4075:
case 118:
case 3776:
case 3473:
case 902:
case 942:
case 2678:
case 3197:
case 2550:
case 2430:
case 2030:
case 19:
case 1587:
case 2620:
case 359:
case 4073:
case 2786:
case 2336:
case 2083:
case 2483:
case 3688:
case 3324:
case 3461:
case 3061:
case 536:
case 1874:
case 668:
case 2900:
case 2876:
case 745:
case 705:
case 3143:
case 753:
case 1334:
case 1784:
case 3541:
case 2452:
case 1801:
case 3560:
case 2180:
case 1640:
case 2329:
case 363:
case 883:
case 3475:
case 3075:
case 143:
case 3040:
case 959:
case 1909:
case 1214:
case 1564:
case 3644:
case 1919:
case 1725:
case 2417:
case 1204:
case 848:
case 2046:
case 1271:
case 545:
case 505:
case 177:
case 1982:
case 2247:
case 553:
case 3995:
case 3186:
case 3735:
case 1044:
case 1265:
case 1320:
case 3870:
case 1505:
case 3330:
case 3780:
case 134:
case 3947:
case 3916:
case 3906:
case 1378:
case 2833:
case 1112:
case 3258:
case 2361:
case 2634:
case 696:
case 3626:
case 3733:
case 3036:
case 3383:
case 3436:
case 2728:
case 3993:
case 1857:
case 2745:
case 1955:
case 1026:
case 2770:
case 1272:
case 3352:
case 3237:
case 2508:
case 3639:
case 232:
case 3429:
case 2268:
case 2518:
case 1111:
case 1503:
case 3843:
case 1629:
case 2340:
case 1439:
case 924:
case 639:
case 2991:
case 2860:
case 3742:
case 3398:
case 7:
case 698:
case 900:
case 1961:
case 1890:
case 514:
case 1975:
case 611:
case 94:
case 3291:
case 1337:
case 424:
case 610:
case 441:
case 1283:
case 3576:
case 3327:
case 1877:
case 400:
case 440:
case 627:
case 2382:
case 493:
case 1230:
case 3741:
case 324:
case 799:
case 1584:
case 738:
case 2992:
case 186:
case 2309:
case 3365:
case 300:
case 340:
case 301:
case 2353:
case 1962:
case 2586:
case 289:
case 34:
case 294:
case 30:
case 1251:
case 3371:
case 1821:
case 175:
case 1169:
case 3292:
case 993:
case 2842:
case 16:
case 784:
case 3304:
case 1548:
case 3926:
case 3808:
case 599:
case 2934:
case 3481:
case 3818:
case 3693:
case 680:
case 2766:
case 2463:
case 1655:
case 2543:
case 1310:
case 1681:
case 1177:
case 1468:
case 2141:
case 3799:
case 2226:
case 707:
case 3939:
case 4082:
case 1705:
case 1224:
case 1854:
case 4019:
case 4009:
case 584:
case 2427:
case 2027:
case 1929:
case 1609:
case 3482:
case 1121:
case 1869:
case 1523:
case 5:
case 3009:
case 3409:
case 2142:
case 3695:
case 3131:
case 2528:
case 3756:
case 3053:
case 3453:
case 3019:
case 1416:
case 1016:
case 4081:
case 1759:
case 2471:
case 2071:
case 2949:
case 1047:
case 23:
case 2597:
case 116:
case 1006:
case 3894:
case 2718:
case 3616:
case 3150:
case 2414:
case 1207:
case 2404:
case 2004:
case 1217:
case 219:
case 3844:
case 2467:
case 168:
case 1264:
case 214:
case 1173:
case 1097:
case 2294:
case 2389:
case 308:
case 2739:
case 2266:
case 2516:
case 1571:
case 1205:
case 2192:
case 1638:
case 1428:
case 3670:
case 2849:
case 719:
case 1215:
case 1445:
case 3734:
case 1045:
case 3384:
case 3558:
case 3299:
case 3628:
case 2423:
case 2023:
case 3038:
case 3438:
case 2633:
case 2726:
case 655:
case 1470:
case 4057:
case 603:
case 643:
case 2680:
case 1527:
case 313:
case 1657:
case 1140:
case 589:
case 3537:
case 3749:
case 3057:
case 1836:
case 4038:
case 2568:
case 2593:
case 618:
case 3839:
case 2025:
case 2425:
case 2956:
case 3188:
case 1746:
case 1443:
case 2191:
case 1259:
case 207:
case 247:
case 1213:
case 2448:
case 2048:
case 1203:
case 1161:
case 1954:
case 196:
case 2892:
case 3402:
case 483:
case 1689:
case 299:
case 974:
case 1862:
case 1612:
case 3950:
case 3242:
case 1602:
case 273:
case 3489:
case 2231:
case 437:
case 2878:
case 1486:
case 1783:
case 859:
case 4001:
case 284:
case 937:
case 3323:
case 2338:
case 794:
case 2084:
case 3931:
case 1752:
case 2820:
case 3001:
case 3720:
case 3888:
case 3411:
case 3011:
case 1674:
case 2232:
case 2357:
case 1129:
case 3241:
case 1730:
case 374:
case 723:
case 1611:
case 1990:
case 1861:
case 3074:
case 3474:
case 3500:
case 4002:
case 1840:
case 1922:
case 519:
case 3126:
case 1875:
case 4012:
case 3260:
case 929:
case 3932:
case 1751:
case 182:
case 337:
case 1977:
case 3792:
case 1785:
case 842:
case 802:
case 4017:
case 847:
case 3508:
case 3835:
case 1848:
case 4046:
case 332:
case 1927:
case 187:
case 3293:
case 4007:
case 3375:
case 3176:
case 3797:
case 133:
case 1281:
case 506:
case 546:
case 3024:
case 3361:
case 3728:
case 2383:
case 2436:
case 2993:
case 672:
case 3745:
case 1554:
case 735:
case 1963:
case 1998:
case 2352:
case 554:
case 65:
case 1914:
case 2870:
case 2845:
case 1569:
case 1219:
case 1823:
case 1449:
case 1049:
case 2330:
case 2780:
case 3295:
case 1757:
case 2916:
case 2906:
case 2258:
case 2828:
case 432:
case 3017:
case 3362:
case 2351:
case 695:
case 1607:
case 2995:
case 2186:
case 3958:
case 1617:
case 2735:
case 814:
case 1867:
case 2210:
case 964:
case 1712:
case 1702:
case 202:
case 3329:
case 1590:
case 2075:
case 2475:
case 2040:
case 2440:
case 4051:
case 2688:
case 3483:
case 3336:
case 2461:
case 1652:
case 8:
case 117:
case 1683:
case 1125:
case 2143:
case 1491:
case 3052:
case 1577:
case 3532:
case 4030:
case 364:
case 1020:
case 1420:
case 1701:
case 120:
case 3678:
case 1711:
case 2197:
case 3030:
case 1078:
case 259:
case 2170:
case 706:
case 899:
case 2462:
case 2062:
case 2145:
case 3692:
case 1123:
case 873:
case 2317:
case 12:
case 3531:
case 2542:
case 535:
case 3051:
case 1092:
case 3485:
case 1344:
case 754:
case 3133:
case 1984:
case 2592:
case 759:
case 405:
case 1289:
case 894:
case 2710:
case 3158:
case 1212:
case 1562:
case 2396:
case 1202:
case 3642:
case 2195:
case 2700:
case 2421:
case 615:
case 1104:
case 905:
case 945:
case 149:
case 953:
case 3286:
case 2106:
case 369:
case 2305:
case 3369:
case 2315:
case 2477:
case 1441:
case 1041:
case 2193:
case 2168:
case 3354:
case 2422:
case 2022:
case 1163:
case 3641:
case 1211:
case 1561:
case 2276:
case 353:
case 1540:
case 17:
case 345:
case 3800:
case 2313:
case 1575:
case 2090:
case 152:
case 1060:
case 3976:
case 823:
case 1923:
case 1755:
case 1804:
case 3297:
case 2945:
case 1664:
case 128:
case 1696:
case 2970:
case 1814:
case 819:
case 3933:
case 676:
case 2806:
case 2694:
case 563:
case 542:
case 3321:
case 3064:
case 3768:
case 2666:
case 3793:
case 3096:
case 2847:
case 830:
case 2997:
case 1865:
case 1350:
case 2737:
case 831:
case 3405:
case 2469:
case 336:
case 3699:
case 3858:
case 2233:
case 3228:
case 2895:
case 3015:
case 3415:
case 3795:
case 2280:
case 1332:
case 1827:
case 197:
case 1257:
case 2534:
case 3935:
case 559:
case 3837:
case 3322:
case 4015:
case 4005:
case 1056:
case 3716:
case 3013:
case 2618:
case 3459:
case 3059:
case 235:
case 3747:
case 3390:
case 3003:
case 2608:
case 1659:
case 1613:
case 1898:
case 936:
case 3243:
case 1355:
case 3275:
case 1860:
case 1156:
case 865:
case 3952:
case 1600:
case 1731:
case 2579:
case 3983:
case 87:
case 2961:
case 3010:
case 2154:
case 322:
case 3393:
case 3368:
case 870:
case 782:
case 725:
case 1288:
case 1750:
case 2252:
case 2822:
case 2337:
case 2787:
case 3103:
case 376:
case 2877:
case 3113:
case 260:
case 3196:
case 3395:
case 3951:
case 1382:
case 286:
case 2358:
case 261:
case 2584:
case 1309:
case 849:
case 3722:
case 1586:
case 189:
case 2962:
case 1353:
case 922:
case 3115:
case 2821:
case 3589:
case 3347:
case 1978:
case 485:
case 422:
case 976:
case 1842:
case 2973:
case 3262:
case 3512:
case 712:
case 1766:
case 458:
case 1794:
case 2122:
case 3924:
case 2310:
case 3803:
case 2093:
case 3813:
case 2300:
case 1226:
case 4058:
case 1160:
case 3437:
case 1072:
case 3557:
case 3769:
case 3672:
case 2715:
case 2929:
case 1637:
case 315:
case 4037:
case 1570:
case 2095:
case 2495:
case 2609:
case 3665:
case 1545:
case 3458:
case 2653:
case 2869:
case 3754:
case 3538:
case 415:
case 2682:
case 1065:
case 1142:
case 1658:
case 3917:
case 3946:
case 1949:
case 13:
case 3896:
case 358:
case 2047:
case 2016:
case 2416:
case 2713:
case 2759:
case 582:
case 2406:
case 1244:
case 1597:
case 1414:
case 1014:
case 3671:
case 3187:
case 2246:
case 119:
case 828:
case 915:
case 2217:
case 2567:
case 1404:
case 2969:
case 3905:
case 1467:
case 1178:
case 3130:
case 114:
case 2296:
case 1302:
case 268:
case 3915:
case 3729:
case 2097:
case 1999:
case 2173:
case 1266:
case 3807:
case 1294:
case 1389:
case 1547:
case 2638:
case 3033:
case 3386:
case 2028:
case 3736:
case 3623:
case 3185:
case 2205:
case 1192:
case 3509:
case 3964:
case 592:
case 1849:
case 1423:
case 1726:
case 2445:
case 2045:
case 2162:
case 1595:
case 2070:
case 2657:
case 2140:
case 1680:
case 2175:
case 1311:
case 3959:
case 3480:
case 561:
case 586:
case 1374:
case 664:
case 2707:
case 1568:
case 1218:
case 1191:
case 3648:
case 2443:
case 1635:
case 1425:
case 833:
case 2259:
case 575:
case 2598:
case 2829:
case 107:
case 147:
case 2203:
case 3555:
case 2954:
case 887:
case 3183:
case 3625:
case 3035:
case 3435:
case 3885:
case 296:
case 2689:
case 1149:
case 3397:
case 761:
case 2602:
case 76:
case 3684:
case 844:
case 4076:
case 2333:
case 2486:
case 1878:
case 2783:
case 632:
case 350:
case 3146:
case 3345:
case 1484:
case 1084:
case 2873:
case 1820:
case 1250:
case 1942:
case 2287:
case 2752:
case 451:
case 1891:
case 2674:
case 3076:
case 3773:
case 2730:
case 2380:
case 1232:
case 395:
case 1:
case 817:
case 1676:
case 2840:
case 3679:
case 926:
case 951:
case 950:
case 792:
case 3343:
case 225:
case 1941:
case 3290:
case 2136:
case 2848:
case 3174:
case 3767:
case 1639:
case 2927:
case 1029:
case 3111:
case 2825:
case 3503:
case 3513:
case 3559:
case 3298:
case 2281:
case 233:
case 3629:
case 278:
case 3039:
case 3439:
case 1626:
case 1436:
case 812:
case 1383:
case 1556:
case 1993:
case 1968:
case 3955:
case 3636:
case 2738:
case 3391:
case 509:
case 1352:
case 3272:
case 1237:
case 434:
case 3189:
case 683:
case 3515:
case 3265:
case 3320:
case 1870:
case 2219:
case 3505:
case 2253:
case 1845:
case 2971:
case 2282:
case 2049:
case 1947:
case 334:
case 3102:
case 3378:
case 3112:
case 1828:
case 4026:
case 3909:
case 552:
case 3214:
case 565:
case 1644:
case 3725:
case 2607:
case 674:
case 1351:
case 2646:
case 2867:
case 3392:
case 868:
case 2617:
case 1385:
case 3444:
case 491:
case 2712:
case 882:
case 1560:
case 770:
case 1210:
case 142:
case 102:
case 3640:
case 163:
case 490:
case 2702:
case 2590:
case 99:
case 343:
case 362:
case 2339:
case 355:
case 1061:
case 1461:
case 1324:
case 765:
case 1688:
case 2522:
case 418:
case 991:
case 2652:
case 217:
case 2491:
case 3334:
case 77:
case 3488:
case 2125:
case 3801:
case 648:
case 2701:
case 2420:
case 2020:
case 2630:
case 318:
case 1776:
case 1073:
case 221:
case 3587:
case 955:
case 962:
case 159:
case 2078:
case 3673:
case 943:
case 903:
case 390:
case 1317:
case 2685:
case 1462:
case 1062:
case 443:
case 3779:
case 896:
case 709:
case 1128:
case 2492:
case 2092:
case 3662:
case 3119:
case 1592:
case 3153:
case 2984:
case 86:
case 578:
case 2289:
case 3031:
case 2042:
case 2366:
case 3109:
case 2562:
case 1986:
case 720:
case 587:
case 1364:
case 1421:
case 3182:
case 38:
case 2202:
case 1195:
case 366:
case 3284:
case 209:
case 2104:
case 380:
case 3450:
case 2114:
case 3050:
case 154:
case 1106:
case 1116:
case 861:
case 2441:
case 2041:
case 3552:
case 480:
case 1477:
case 3432:
case 466:
case 892:
case 1591:
case 2163:
case 1422:
case 3677:
case 3181:
case 98:
case 3583:
case 3155:
case 2561:
case 271:
case 1276:
case 3356:
case 1359:
case 981:
case 27:
case 2540:
case 966:
case 1490:
case 1090:
case 1303:
case 2172:
case 2318:
case 48:
case 3901:
case 3911:
case 2460:
case 3690:
case 2308:
case 3938:
case 311:
case 2804:
case 2696:
case 310:
case 1970:
case 3342:
case 3763:
case 693:
case 2664:
case 228:
case 3494:
case 427:
case 3517:
case 1806:
case 3546:
case 816:
case 1816:
case 1694:
case 2871:
case 3507:
case 927:
case 2238:
case 3819:
case 339:
case 1997:
case 2499:
case 2099:
case 2605:
case 1549:
case 398:
case 2615:
case 3772:
case 2967:
case 3727:
case 2782:
case 498:
case 2332:
case 2827:
case 297:
case 2257:
case 504:
case 544:
case 60:
case 1534:
case 733:
case 1454:
case 910:
case 2872:
case 520:
case 3765:
case 2709:
case 41:
case 2456:
case 3524:
case 787:
case 2925:
case 1943:
case 2536:
case 410:
case 1893:
case 4066:
case 135:
case 327:
case 4094:
case 3248:
case 600:
case 2898:
case 640:
case 91:
case 2603:
case 3408:
case 3704:
case 3225:
case 641:
case 2679:
case 862:
case 1126:
case 3875:
case 1325:
case 1260:
case 855:
case 2343:
case 558:
case 3785:
case 1348:
case 1401:
case 1001:
case 996:
case 2222:
case 1888:
case 2476:
case 1011:
case 722:
case 785:
case 1241:
case 2277:
case 295:
case 1074:
case 3611:
case 1778:
case 2883:
case 2684:
case 226:
case 251:
case 2328:
case 2830:
case 3921:
case 129:
case 1791:
case 2345:
case 925:
case 1323:
case 818:
case 2107:
case 1412:
case 1012:
case 396:
case 2851:
case 3689:
case 1402:
case 2775:
case 3862:
case 1089:
case 1489:
case 425:
case 3602:
case 2152:
case 267:
case 1839:
case 3443:
case 3043:
case 2648:
case 3717:
case 715:
case 1188:
case 3259:
case 3829:
case 3213:
case 3563:
case 3203:
case 3161:
case 2555:
case 3954:
case 659:
case 2625:
case 2435:
case 1918:
case 113:
case 3657:
case 1256:
case 1826:
case 1908:
case 312:
case 1057:
case 2913:
case 1537:
case 1749:
case 2080:
case 4070:
case 3572:
case 2824:
case 2386:
case 3638:
case 3028:
case 3724:
case 576:
case 2269:
case 642:
case 602:
case 663:
case 1670:
case 3045:
case 1734:
case 3445:
case 758:
case 1299:
case 1994:
case 1966:
case 3470:
case 3070:
case 2905:
case 3969:
case 3504:
case 2130:
case 3296:
case 2915:
case 2729:
case 3264:
case 3514:
case 3097:
case 2846:
case 3497:
case 888:
case 912:
case 3173:
case 108:
case 457:
case 2614:
case 3047:
case 258:
case 3759:
case 316:
case 3406:
case 2604:
case 4068:
case 1150:
case 3207:
case 2671:
case 1894:
case 1616:
case 810:
case 1606:
case 3217:
case 595:
case 2815:
case 3121:
case 3095:
case 3495:
case 2665:
case 3609:
case 3619:
case 3653:
case 2058:
case 2754:
case 3523:
case 81:
case 957:
case 1131:
case 1409:
case 1009:
case 839:
case 898:
case 1053:
case 2946:
case 1799:
case 2037:
case 2437:
case 1580:
case 2627:
case 2557:
case 916:
case 3190:
case 2236:
case 3705:
case 551:
case 3224:
case 3854:
case 3715:
case 3929:
case 1535:
case 1055:
case 1455:
case 1693:
case 4047:
case 1668:
case 55:
case 1481:
case 1081:
case 654:
case 2924:
case 3525:
case 646:
case 2803:
case 827:
case 3468:
case 3796:
case 2859:
case 572:
case 1371:
case 3251:
case 3821:
case 2316:
case 2589:
case 14:
case 10:
case 2790:
case 88:
case 2306:
case 3169:
case 1831:
case 36:
case 750:
case 3973:
case 360:
case 2196:
case 124:
case 2951:
case 635:
case 386:
case 1278:
case 2985:
case 1166:
case 1365:
case 1850:
case 100:
case 881:
case 2722:
case 880:
case 772:
case 141:
case 101:
case 2273:
case 486:
case 179:
case 975:
case 461:
case 1372:
case 3252:
case 3822:
case 3337:
case 3940:
case 1576:
case 2103:
case 2511:
case 2261:
case 276:
case 392:
case 2501:
case 2159:
case 2275:
case 1988:
case 960:
case 2952:
case 475:
case 2240:
case 1363:
case 3579:
case 1398:
case 2983:
case 3961:
case 2410:
case 222:
case 2721:
case 285:
case 2393:
case 46:
case 1747:
case 1013:
case 1413:
case 2771:
case 2248:
case 1706:
case 1403:
case 1003:
case 1390:
case 3529:
case 2881:
case 3659:
case 2418:
case 3603:
case 591:
case 2855:
case 2360:
case 2704:
case 3827:
case 397:
case 1100:
case 2341:
case 1935:
case 928:
case 815:
case 1656:
case 1837:
case 518:
case 3872:
case 3709:
case 3056:
case 3753:
case 3925:
case 3536:
case 2223:
case 3238:
case 777:
case 3099:
case 3499:
case 1245:
case 2669:
case 623:
case 3615:
case 298:
case 497:
case 1270:
case 3350:
case 788:
case 4056:
case 1405:
case 136:
case 3967:
case 2727:
case 1297:
case 1544:
case 997:
case 3923:
case 3696:
case 2798:
case 210:
case 3814:
case 2466:
case 2066:
case 2342:
case 3664:
case 562:
case 543:
case 2494:
case 2267:
case 858:
case 1933:
case 1768:
case 1464:
case 1321:
case 3127:
case 577:
case 105:
case 145:
case 1800:
case 153:
case 909:
case 3540:
case 885:
case 2974:
case 3172:
case 3318:
case 365:
case 630:
case 2911:
case 3460:
case 3060:
case 1976:
case 3041:
case 2552:
case 3979:
case 2432:
case 1588:
case 3274:
case 449:
case 3198:
case 2677:
case 619:
case 2356:
case 266:
case 349:
case 2399:
case 281:
case 3104:
case 2530:
case 1087:
case 3573:
case 169:
case 790:
case 1286:
case 471:
case 965:
case 2902:
case 3687:
case 791:
case 2119:
case 2585:
case 79:
case 3984:
case 3394:
case 2621:
case 2431:
case 2031:
case 3366:
case 3442:
case 47:
case 2551:
case 2109:
case 3165:
case 3212:
case 3562:
case 4060:
case 1158:
case 970:
case 28:
case 3202:
case 3651:
case 917:
case 291:
case 1692:
case 32:
case 872:
case 3492:
case 780:
case 3420:
case 3020:
case 3701:
case 320:
case 218:
case 3884:
case 321:
case 851:
case 1430:
case 304:
case 29:
case 607:
case 4091:
case 3167:
case 2673:
case 850:
case 3078:
case 1910:
case 1691:
case 3148:
case 1135:
case 456:
case 895:
case 1786:
case 1336:
case 420:
case 4020:
case 51:
case 317:
case 1900:
case 2661:
case 2784:
case 1876:
case 2811:
case 3577:
case 1532:
case 598:
case 1452:
case 2675:
case 3712:
case 921:
case 3879:
case 2640:
case 1329:
case 944:
case 904:
case 3590:
case 3789:
case 243:
case 3339:
case 510:
case 42:
case 3965:
case 2909:
case 2214:
case 2564:
case 1407:
case 487:
case 2596:
case 288:
case 71:
case 3184:
case 1362:
case 1446:
case 2919:
case 1017:
case 2953:
case 739:
case 2271:
case 277:
case 478:
case 2982:
case 1216:
case 1206:
case 3646:
case 2392:
case 6:
case 1958:
case 2444:
case 2044:
case 798:
case 2320:
case 3914:
case 1649:
case 3219:
case 3569:
case 987:
case 2838:
case 3253:
case 3971:
case 3757:
case 3282:
case 3449:
case 2378:
case 2112:
case 1833:
case 1024:
case 1634:
case 2227:
case 2857:
case 1880:
case 581:
case 2723:
case 3738:
case 3434:
case 3034:
case 566:
case 2391:
case 673:
case 638:
case 4049:
case 3963:
case 580:
case 1770:
case 3998:
case 3848:
case 2174:
case 2767:
case 1508:
case 1835:
case 58:
case 1268:
case 3927:
case 387:
case 1797:
case 3255:
case 3825:
case 867:
case 2503:
case 2513:
case 2101:
case 333:
case 2439:
case 2039:
case 378:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749654001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,];
var gg_b = "1749654001/";

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
