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
case 1987:
case 2278:
case 2320:
case 2527:
case 3728:
case 3070:
case 1769:
case 3543:
case 1364:
case 377:
case 552:
case 2808:
case 3119:
case 2498:
case 411:
case 2560:
case 2695:
case 2432:
case 1015:
case 1780:
case 2032:
case 1887:
case 3290:
case 616:
case 1829:
case 536:
case 2098:
case 3500:
case 2396:
case 297:
case 3153:
case 2507:
case 819:
case 326:
case 3708:
case 3283:
case 937:
case 2044:
case 3206:
case 1909:
case 71:
case 4064:
case 220:
case 3567:
case 550:
case 3360:
case 2928:
case 59:
case 1793:
case 3976:
case 1141:
case 1099:
case 2619:
case 2682:
case 660:
case 507:
case 24:
case 3195:
case 1373:
case 3876:
case 1447:
case 1755:
case 3327:
case 2077:
case 3389:
case 3520:
case 20:
case 1809:
case 1881:
case 1557:
case 401:
case 1350:
case 3082:
case 3019:
case 1436:
case 2959:
case 3301:
case 3934:
case 1623:
case 1115:
case 722:
case 125:
case 3825:
case 4085:
case 1516:
case 3644:
case 453:
case 2554:
case 3539:
case 2521:
case 3834:
case 4050:
case 2339:
case 3321:
case 85:
case 3842:
case 2865:
case 1199:
case 1041:
case 1603:
case 3095:
case 637:
case 890:
case 3495:
case 4092:
case 21:
case 720:
case 2734:
case 475:
case 2813:
case 3759:
case 809:
case 1737:
case 3561:
case 3905:
case 1174:
case 1640:
case 74:
case 2233:
case 3942:
case 1262:
case 2501:
case 849:
case 3453:
case 4010:
case 732:
case 692:
case 3314:
case 135:
case 3971:
case 1502:
case 1238:
case 846:
case 1918:
case 806:
case 3201:
case 3533:
case 3782:
case 2575:
case 3465:
case 1472:
case 2442:
case 1818:
case 1687:
case 1629:
case 3128:
case 682:
case 2176:
case 2608:
case 3871:
case 3065:
case 1072:
case 65:
case 405:
case 730:
case 2919:
case 1285:
case 193:
case 2239:
case 3795:
case 2434:
case 445:
case 3459:
case 2771:
case 1437:
case 2333:
case 1193:
case 1556:
case 1362:
case 2025:
case 77:
case 1131:
case 2514:
case 3108:
case 649:
case 2819:
case 1037:
case 3944:
case 38:
case 1264:
case 1446:
case 3877:
case 2105:
case 307:
case 1469:
case 3428:
case 2378:
case 1348:
case 3770:
case 2142:
case 2220:
case 3165:
case 2659:
case 4094:
case 2798:
case 3597:
case 2732:
case 2296:
case 1480:
case 862:
case 526:
case 3844:
case 816:
case 39:
case 329:
case 3549:
case 3352:
case 982:
case 3977:
case 350:
case 2267:
case 2613:
case 95:
case 3260:
case 2068:
case 1031:
case 3832:
case 990:
case 1431:
case 336:
case 1774:
case 2744:
case 2397:
case 1493:
case 2590:
case 3008:
case 1137:
case 909:
case 428:
case 3159:
case 1630:
case 27:
case 3212:
case 860:
case 415:
case 2526:
case 1055:
case 3484:
case 1903:
case 1747:
case 1455:
case 2870:
case 949:
case 1658:
case 3932:
case 980:
case 1273:
case 1430:
case 840:
case 1356:
case 2201:
case 1058:
case 3575:
case 2719:
case 889:
case 2782:
case 2533:
case 1458:
case 3995:
case 2314:
case 707:
case 2971:
case 3261:
case 1655:
case 51:
case 3176:
case 3405:
case 4002:
case 750:
case 729:
case 79:
case 2871:
case 3608:
case 1841:
case 63:
case 2013:
case 4045:
case 3953:
case 82:
case 3005:
case 672:
case 1680:
case 2184:
case 3239:
case 1936:
case 842:
case 2795:
case 4056:
case 2459:
case 3034:
case 1718:
case 3982:
case 3919:
case 1669:
case 1646:
case 3514:
case 4022:
case 3425:
case 1836:
case 2375:
case 3025:
case 686:
case 1187:
case 3391:
case 367:
case 1257:
case 3076:
case 3378:
case 1204:
case 144:
case 247:
case 1740:
case 2770:
case 2028:
case 970:
case 1409:
case 2625:
case 1009:
case 28:
case 2944:
case 2877:
case 2428:
case 1311:
case 207:
case 4:
case 1579:
case 229:
case 29:
case 2844:
case 1288:
case 1703:
case 1947:
case 3267:
case 93:
case 2390:
case 3506:
case 3659:
case 717:
case 2634:
case 3798:
case 3583:
case 597:
case 3296:
case 1999:
case 3200:
case 3468:
case 1429:
case 972:
case 3744:
case 1487:
case 236:
case 1672:
case 996:
case 2008:
case 2306:
case 3590:
case 3125:
case 2898:
case 3970:
case 330:
case 1029:
case 3366:
case 4011:
case 434:
case 2832:
case 3870:
case 522:
case 252:
case 198:
case 1963:
case 1235:
case 2159:
case 2227:
case 2212:
case 3777:
case 2578:
case 1573:
case 76:
case 277:
case 1855:
case 2470:
case 1211:
case 900:
case 869:
case 3512:
case 3884:
case 1040:
case 458:
case 2728:
case 4024:
case 57:
case 3527:
case 1993:
case 2290:
case 3032:
case 2868:
case 1831:
case 2307:
case 1403:
case 3098:
case 2119:
case 1003:
case 2182:
case 239:
case 3808:
case 2252:
case 3498:
case 1086:
case 3695:
case 999:
case 1729:
case 942:
case 3768:
case 2360:
case 424:
case 3928:
case 1969:
case 3266:
case 3249:
case 1946:
case 359:
case 2153:
case 2596:
case 3300:
case 2283:
case 4004:
case 226:
case 3507:
case 3297:
case 1324:
case 2206:
case 1351:
case 3044:
case 3077:
case 2389:
case 1636:
case 30:
case 1118:
case 532:
case 3682:
case 3171:
case 1023:
case 2195:
case 2784:
case 3477:
case 4088:
case 1846:
case 1335:
case 612:
case 3343:
case 2677:
case 1647:
case 2214:
case 1730:
case 640:
case 2825:
case 3198:
case 26:
case 3361:
case 2419:
case 103:
case 1758:
case 600:
case 2019:
case 2082:
case 1837:
case 1256:
case 3959:
case 1937:
case 3705:
case 151:
case 3554:
case 485:
case 2539:
case 910:
case 1585:
case 3742:
case 2925:
case 2170:
case 739:
case 1674:
case 2644:
case 1217:
case 62:
case 2805:
case 872:
case 168:
case 1663:
case 3177:
case 2495:
case 1018:
case 31:
case 2759:
case 1418:
case 2842:
case 3339:
case 2321:
case 1872:
case 2354:
case 3865:
case 3071:
case 1615:
case 2095:
case 1245:
case 1972:
case 966:
case 3965:
case 3725:
case 1538:
case 1202:
case 2561:
case 1781:
case 3670:
case 3913:
case 886:
case 360:
case 3313:
case 3649:
case 212:
case 2305:
case 3126:
case 266:
case 1957:
case 852:
case 2606:
case 3365:
case 2854:
case 4037:
case 2821:
case 1372:
case 3839:
case 2342:
case 1581:
case 3014:
case 3190:
case 2954:
case 421:
case 3282:
case 3219:
case 3525:
case 742:
case 3861:
case 3075:
case 639:
case 799:
case 72:
case 1062:
case 2325:
case 210:
case 1558:
case 1179:
case 2149:
case 1611:
case 519:
case 3183:
case 2491:
case 829:
case 3253:
case 2801:
case 2433:
case 4072:
case 757:
case 1530:
case 3542:
case 435:
case 2334:
case 1785:
case 1194:
case 1010:
case 2565:
case 700:
case 3961:
case 3505:
case 677:
case 2271:
case 1241:
case 2513:
case 96:
case 3721:
case 171:
case 1410:
case 3295:
case 3707:
case 115:
case 2508:
case 2232:
case 3090:
case 2796:
case 128:
case 576:
case 712:
case 2298:
case 592:
case 1851:
case 3568:
case 1824:
case 2989:
case 2912:
case 1215:
case 766:
case 3800:
case 2927:
case 1951:
case 1645:
case 1924:
case 3633:
case 2812:
case 2584:
case 202:
case 3691:
case 2827:
case 4031:
case 3843:
case 242:
case 2720:
case 2078:
case 1602:
case 1369:
case 3026:
case 2960:
case 939:
case 1094:
case 2614:
case 2277:
case 817:
case 3727:
case 478:
case 2528:
case 55:
case 3576:
case 299:
case 3712:
case 3789:
case 3996:
case 2743:
case 1494:
case 1804:
case 1162:
case 3896:
case 3920:
case 3406:
case 2133:
case 1331:
case 2368:
case 1079:
case 3760:
case 2191:
case 3483:
case 346:
case 3867:
case 4069:
case 549:
case 2449:
case 580:
case 1479:
case 240:
case 2700:
case 1617:
case 289:
case 3006:
case 1274:
case 309:
case 2806:
case 1150:
case 3407:
case 2496:
case 2621:
case 546:
case 2883:
case 286:
case 2067:
case 3101:
case 3849:
case 4047:
case 138:
case 952:
case 1192:
case 1138:
case 2161:
case 1616:
case 2398:
case 35:
case 494:
case 1269:
case 1748:
case 4074:
case 3577:
case 390:
case 2906:
case 1523:
case 296:
case 1657:
case 537:
case 3121:
case 3284:
case 3427:
case 2826:
case 448:
case 617:
case 2043:
case 4015:
case 2990:
case 2601:
case 4063:
case 2570:
case 1811:
case 3027:
case 2443:
case 3661:
case 2952:
case 1255:
case 2000:
case 98:
case 3706:
case 392:
case 2344:
case 3460:
case 769:
case 376:
case 3532:
case 3783:
case 1586:
case 3060:
case 1231:
case 270:
case 1503:
case 3978:
case 3991:
case 3600:
case 1518:
case 1651:
case 3265:
case 2120:
case 2975:
case 1272:
case 1624:
case 3933:
case 2595:
case 3213:
case 652:
case 3571:
case 1902:
case 2205:
case 431:
case 1050:
case 2461:
case 562:
case 3382:
case 826:
case 1438:
case 1492:
case 1635:
case 3001:
case 1802:
case 2689:
case 3401:
case 2612:
case 2627:
case 636:
case 772:
case 2196:
case 175:
case 1038:
case 1845:
case 2875:
case 1450:
case 3833:
case 839:
case 2100:
case 1856:
case 1604:
case 917:
case 3620:
case 1917:
case 2791:
case 69:
case 73:
case 2225:
case 2519:
case 153:
case 68:
case 1822:
case 101:
case 1173:
case 2143:
case 3112:
case 425:
case 3189:
case 770:
case 2234:
case 3259:
case 418:
case 1956:
case 877:
case 3127:
case 3421:
case 4036:
case 3696:
case 3454:
case 141:
case 1710:
case 2607:
case 1574:
case 2544:
case 3332:
case 1879:
case 540:
case 3467:
case 589:
case 249:
case 2007:
case 3161:
case 2790:
case 280:
case 1685:
case 161:
case 1303:
case 3654:
case 209:
case 3806:
case 3621:
case 3496:
case 1386:
case 667:
case 386:
case 2752:
case 3067:
case 1994:
case 3420:
case 372:
case 2997:
case 81:
case 1599:
case 124:
case 25:
case 1979:
case 3276:
case 2949:
case 2228:
case 2577:
case 290:
case 2726:
case 1692:
case 3443:
case 3377:
case 2012:
case 1638:
case 1116:
case 2154:
case 4003:
case 2121:
case 2427:
case 2412:
case 1035:
case 3601:
case 4086:
case 1424:
case 2060:
case 3749:
case 1515:
case 1157:
case 3926:
case 1229:
case 370:
case 3268:
case 3797:
case 292:
case 1024:
case 4040:
case 2208:
case 2460:
case 3595:
case 887:
case 780:
case 2213:
case 2571:
case 1541:
case 1810:
case 3205:
case 1722:
case 1104:
case 67:
case 1962:
case 709:
case 967:
case 2933:
case 3975:
case 3120:
case 1230:
case 727:
case 2891:
case 3553:
case 2833:
case 859:
case 2107:
case 4018:
case 2714:
case 3875:
case 133:
case 630:
case 2382:
case 2319:
case 790:
case 219:
case 75:
case 2001:
case 1258:
case 1673:
case 3167:
case 2643:
case 510:
case 1188:
case 2160:
case 3225:
case 185:
case 3814:
case 3733:
case 3519:
case 1057:
case 782:
case 1702:
case 3234:
case 2127:
case 2259:
case 566:
case 822:
case 2421:
case 1016:
case 3607:
case 443:
case 2454:
case 1416:
case 2021:
case 3039:
case 403:
case 776:
case 3371:
case 369:
case 195:
case 1135:
case 3914:
case 3143:
case 632:
case 2395:
case 779:
case 687:
case 366:
case 3683:
case 3178:
case 181:
case 3854:
case 3606:
case 1022:
case 4081:
case 3342:
case 3821:
case 1422:
case 260:
case 1111:
case 1679:
case 2649:
case 3305:
case 569:
case 620:
case 2701:
case 2152:
case 1985:
case 1358:
case 91:
case 2525:
case 659:
case 830:
case 1537:
case 1694:
case 737:
case 191:
case 2939:
case 3921:
case 3491:
case 2183:
case 216:
case 2678:
case 2253:
case 3433:
case 1850:
case 1381:
case 1838:
case 2075:
case 310:
case 1757:
case 1402:
case 3091:
case 3149:
case 262:
case 3166:
case 2505:
case 3652:
case 2961:
case 3271:
case 2721:
case 3739:
case 3513:
case 1992:
case 4058:
case 1716:
case 3334:
case 1572:
case 746:
case 3565:
case 1218:
case 1950:
case 987:
case 2052:
case 279:
case 2490:
case 3927:
case 1156:
case 498:
case 2090:
case 3232:
case 1973:
case 2707:
case 3860:
case 3298:
case 3078:
case 1873:
case 1411:
case 2026:
case 3960:
case 61:
case 1704:
case 1240:
case 2270:
case 1309:
case 997:
case 2633:
case 3675:
case 302:
case 3812:
case 4087:
case 3478:
case 2900:
case 2691:
case 237:
case 2996:
case 596:
case 3743:
case 1735:
case 572:
case 716:
case 165:
case 2967:
case 3277:
case 1569:
case 2789:
case 32:
case 2712:
case 1546:
case 399:
case 3449:
case 1751:
case 922:
case 1964:
case 2308:
case 2896:
case 300:
case 3133:
case 2406:
case 1145:
case 1329:
case 3066:
case 404:
case 1:
case 1580:
case 246:
case 3191:
case 3948:
case 2503:
case 422:
case 673:
case 170:
case 843:
case 2779:
case 741:
case 2293:
case 3424:
case 701:
case 2374:
case 1344:
case 904:
case 3024:
case 3563:
case 13:
case 2185:
case 3638:
case 2255:
case 1377:
case 753:
case 4032:
case 2347:
case 614:
case 3323:
case 1826:
case 1139:
case 534:
case 3599:
case 324:
case 3894:
case 459:
case 2657:
case 196:
case 3404:
case 1983:
case 3711:
case 2064:
case 2523:
case 420:
case 775:
case 3209:
case 1906:
case 868:
case 3340:
case 2464:
case 565:
case 3547:
case 1778:
case 988:
case 1020:
case 4044:
case 497:
case 3979:
case 1398:
case 2616:
case 3685:
case 1161:
case 40:
case 2138:
case 2192:
case 238:
case 2363:
case 1332:
case 3879:
case 3488:
case 3994:
case 2315:
case 186:
case 1496:
case 361:
case 3303:
case 1654:
case 5:
case 2150:
case 1806:
case 1607:
case 2085:
case 3318:
case 1439:
case 3016:
case 2956:
case 644:
case 581:
case 1234:
case 2688:
case 3135:
case 169:
case 2822:
case 2341:
case 3416:
case 1039:
case 2485:
case 3057:
case 3745:
case 1733:
case 1791:
case 2917:
case 3281:
case 3124:
case 2604:
case 1100:
case 3457:
case 41:
case 1061:
case 1875:
case 2845:
case 1196:
case 1553:
case 3230:
case 1612:
case 1689:
case 3188:
case 688:
case 3673:
case 2492:
case 1461:
case 2050:
case 3756:
case 2902:
case 3810:
case 1595:
case 1120:
case 1975:
case 2272:
case 1242:
case 3962:
case 2651:
case 3104:
case 271:
case 1739:
case 943:
case 2241:
case 844:
case 674:
case 3950:
case 2194:
case 3716:
case 1334:
case 3572:
case 1197:
case 2462:
case 4042:
case 754:
case 3850:
case 3002:
case 1166:
case 3402:
case 2558:
case 2062:
case 1325:
case 3757:
case 1033:
case 3838:
case 3045:
case 245:
case 3358:
case 3056:
case 968:
case 323:
case 391:
case 1761:
case 2738:
case 205:
case 3537:
case 3694:
case 2581:
case 3330:
case 1342:
case 2372:
case 1821:
case 1606:
case 898:
case 2148:
case 1305:
case 112:
case 728:
case 467:
case 2816:
case 3422:
case 189:
case 643:
case 2617:
case 1097:
case 873:
case 1449:
case 3751:
case 1466:
case 3724:
case 2904:
case 432:
case 1049:
case 1191:
case 3329:
case 1133:
case 3145:
case 100:
case 2804:
case 2656:
case 2509:
case 651:
case 3223:
case 1743:
case 1907:
case 2773:
case 524:
case 254:
case 2299:
case 157:
case 12:
case 3546:
case 199:
case 3569:
case 3864:
case 2247:
case 1277:
case 913:
case 365:
case 2110:
case 3117:
case 3411:
case 2602:
case 1720:
case 1078:
case 2346:
case 2835:
case 1376:
case 4068:
case 1827:
case 705:
case 102:
case 2448:
case 1812:
case 430:
case 1675:
case 2645:
case 3593:
case 3156:
case 1912:
case 2215:
case 1989:
case 855:
case 1767:
case 2380:
case 2529:
case 3531:
case 2587:
case 3788:
case 3203:
case 228:
case 558:
case 215:
case 1232:
case 2935:
case 2950:
case 3010:
case 2572:
case 1542:
case 7:
case 3785:
case 1754:
case 2992:
case 1721:
case 1961:
case 918:
case 1505:
case 2892:
case 765:
case 3558:
case 1075:
case 1861:
case 4013:
case 4065:
case 2850:
case 2445:
case 575:
case 1253:
case 1678:
case 116:
case 1183:
case 1939:
case 2537:
case 734:
case 3738:
case 305:
case 1014:
case 1190:
case 2330:
case 4059:
case 2456:
case 694:
case 1525:
case 2056:
case 1282:
case 2985:
case 553:
case 1152:
case 223:
case 1649:
case 2111:
case 2885:
case 2417:
case 160:
case 1313:
case 1534:
case 1839:
case 3372:
case 2017:
case 3148:
case 1126:
case 3957:
case 1483:
case 3904:
case 407:
case 2:
case 2329:
case 1920:
case 2145:
case 1308:
case 538:
case 3274:
case 3617:
case 625:
case 3888:
case 3479:
case 4028:
case 2724:
case 618:
case 447:
case 1712:
case 1789:
case 3988:
case 1967:
case 3656:
case 3804:
case 49:
case 2735:
case 3773:
case 429:
case 354:
case 3299:
case 137:
case 1900:
case 234:
case 893:
case 631:
case 3924:
case 2662:
case 2122:
case 2240:
case 2704:
case 2117:
case 2411:
case 2555:
case 1026:
case 1843:
case 2873:
case 3048:
case 1452:
case 864:
case 963:
case 3263:
case 2610:
case 1943:
case 1090:
case 2156:
case 883:
case 2593:
case 1490:
case 3215:
case 179:
case 3529:
case 2531:
case 2203:
case 984:
case 3587:
case 3851:
case 781:
case 528:
case 1208:
case 2563:
case 2024:
case 4070:
case 258:
case 192:
case 1706:
case 1598:
case 3911:
case 3503:
case 2287:
case 3586:
case 1060:
case 3293:
case 3073:
case 978:
case 1412:
case 2848:
case 2323:
case 439:
case 1284:
case 2650:
case 3399:
case 2116:
case 3185:
case 1661:
case 2638:
case 3255:
case 2435:
case 1012:
case 1089:
case 2692:
case 182:
case 3540:
case 693:
case 190:
case 2340:
case 3464:
case 1370:
case 3748:
case 2547:
case 733:
case 3246:
case 1949:
case 2979:
case 2004:
case 426:
case 15:
case 2894:
case 2599:
case 224:
case 3523:
case 1997:
case 3064:
case 2209:
case 2994:
case 2088:
case 3315:
case 664:
case 3150:
case 1407:
case 2685:
case 1790:
case 1007:
case 3363:
case 338:
case 3192:
case 1849:
case 2879:
case 2488:
case 1544:
case 1395:
case 2135:
case 301:
case 3817:
case 4019:
case 3485:
case 758:
case 2416:
case 1021:
case 341:
case 1421:
case 3085:
case 1696:
case 3956:
case 1259:
case 678:
case 505:
case 2124:
case 3856:
case 2536:
case 3762:
case 808:
case 2664:
case 3917:
case 3802:
case 2188:
case 2910:
case 4095:
case 3492:
case 2258:
case 3050:
case 1319:
case 2756:
case 375:
case 3038:
case 3336:
case 1714:
case 1401:
case 3092:
case 3945:
case 3272:
case 3651:
case 2962:
case 761:
case 1265:
case 1991:
case 863:
case 4053:
case 2722:
case 2541:
case 571:
case 884:
case 3164:
case 283:
case 1425:
case 2037:
case 355:
case 1514:
case 466:
case 1628:
case 543:
case 3302:
case 3669:
case 3129:
case 2131:
case 1168:
case 503:
case 3187:
case 264:
case 2362:
case 3481:
case 1333:
case 3836:
case 624:
case 3680:
case 551:
case 3936:
case 2155:
case 293:
case 834:
case 2285:
case 3216:
case 2522:
case 3718:
case 2517:
case 3317:
case 1042:
case 985:
case 3510:
case 1608:
case 3841:
case 2146:
case 1405:
case 2169:
case 3631:
case 2629:
case 1953:
case 314:
case 778:
case 4033:
case 3109:
case 1442:
case 2818:
case 865:
case 410:
case 1575:
case 3562:
case 3356:
case 3058:
case 1684:
case 1261:
case 8:
case 3941:
case 3030:
case 2292:
case 1243:
case 574:
case 2273:
case 3235:
case 881:
case 398:
case 3963:
case 1870:
case 2840:
case 3723:
case 2511:
case 2455:
case 2903:
case 1777:
case 3548:
case 2055:
case 1134:
case 2630:
case 961:
case 2394:
case 2803:
case 924:
case 3251:
case 721:
case 1590:
case 3672:
case 3181:
case 442:
case 1468:
case 823:
case 402:
case 513:
case 3087:
case 1552:
case 1366:
case 891:
case 3863:
case 130:
case 685:
case 3947:
case 2080:
case 3579:
case 2715:
case 2763:
case 278:
case 1296:
case 2480:
case 42:
case 1732:
case 1583:
case 499:
case 1506:
case 1659:
case 3637:
case 440:
case 2172:
case 1220:
case 489:
case 2681:
case 2823:
case 2069:
case 3740:
case 2348:
case 1378:
case 2046:
case 3204:
case 132:
case 1105:
case 1476:
case 2264:
case 400:
case 3009:
case 3974:
case 2504:
case 10:
case 1077:
case 2755:
case 284:
case 3423:
case 187:
case 2447:
case 2373:
case 4067:
case 263:
case 1682:
case 1619:
case 1171:
case 3946:
case 159:
case 2793:
case 1928:
case 1266:
case 3787:
case 2474:
case 2588:
case 472:
case 623:
case 2731:
case 120:
case 2909:
case 3351:
case 934:
case 1044:
case 1297:
case 3880:
case 3324:
case 1300:
case 1396:
case 885:
case 1984:
case 2136:
case 43:
case 3831:
case 2063:
case 1032:
case 2887:
case 248:
case 2463:
case 1367:
case 3086:
case 1560:
case 4043:
case 1695:
case 3955:
case 1498:
case 965:
case 3003:
case 588:
case 3211:
case 725:
case 470:
case 718:
case 3709:
case 3855:
case 2364:
case 3573:
case 598:
case 2535:
case 2769:
case 3993:
case 1512:
case 895:
case 1589:
case 1776:
case 2929:
case 3931:
case 4000:
case 1278:
case 2987:
case 2248:
case 3357:
case 1725:
case 981:
case 1291:
case 3550:
case 784:
case 1965:
case 2262:
case 3972:
case 2640:
case 1144:
case 3781:
case 861:
case 1471:
case 824:
case 2441:
case 1813:
case 3316:
case 2385:
case 3018:
case 11:
case 2210:
case 2958:
case 2147:
case 368:
case 3663:
case 1177:
case 923:
case 3123:
case 634:
case 2686:
case 3615:
case 794:
case 231:
case 2199:
case 2041:
case 1865:
case 1071:
case 3418:
case 351:
case 1554:
case 3937:
case 1705:
case 2981:
case 3217:
case 3222:
case 2516:
case 748:
case 3585:
case 2338:
case 2036:
case 1361:
case 343:
case 225:
case 2392:
case 2115:
case 2623:
case 3186:
case 6:
case 3256:
case 858:
case 1959:
case 3758:
case 469:
case 2557:
case 1784:
case 2869:
case 2564:
case 409:
case 363:
case 3141:
case 3099:
case 915:
case 2118:
case 3504:
case 4007:
case 2636:
case 2980:
case 1389:
case 1312:
case 2423:
case 3755:
case 384:
case 2351:
case 3909:
case 1206:
case 2880:
case 490:
case 605:
case 45:
case 578:
case 1283:
case 1708:
case 394:
case 1596:
case 1153:
case 3279:
case 645:
case 2946:
case 427:
case 2787:
case 1567:
case 2086:
case 3015:
case 213:
case 1252:
case 2641:
case 1671:
case 139:
case 2893:
case 3618:
case 2403:
case 1307:
case 0:
case 3063:
case 2831:
case 3551:
case 3887:
case 4012:
case 482:
case 954:
case 1728:
case 1070:
case 2040:
case 3769:
case 3746:
case 476:
case 1226:
case 3929:
case 1968:
case 2304:
case 841:
case 2211:
case 671:
case 3364:
case 1470:
case 274:
case 3535:
case 743:
case 4060:
case 1543:
case 2592:
case 3174:
case 3640:
case 628:
case 1053:
case 3737:
case 2538:
case 3830:
case 3262:
case 2972:
case 1275:
case 3930:
case 1095:
case 4001:
case 905:
case 3603:
case 331:
case 1321:
case 2418:
case 945:
case 2018:
case 3958:
case 1632:
case 3210:
case 2663:
case 268:
case 1805:
case 2217:
case 1644:
case 2674:
case 2222:
case 2585:
case 3516:
case 811:
case 1539:
case 1713:
case 1834:
case 2937:
case 1934:
case 3623:
case 2699:
case 3350:
case 4021:
case 2103:
case 1019:
case 3436:
case 4054:
case 243:
case 1825:
case 325:
case 583:
case 3163:
case 3392:
case 2257:
case 2129:
case 3131:
case 2187:
case 2481:
case 828:
case 3362:
case 2836:
case 1375:
case 815:
case 460:
case 2081:
case 1753:
case 1108:
case 3037:
case 1676:
case 638:
case 2646:
case 2302:
case 2669:
case 798:
case 393:
case 3310:
case 3522:
case 788:
case 2718:
case 4014:
case 975:
case 1459:
case 1254:
case 1795:
case 2680:
case 531:
case 214:
case 462:
case 3472:
case 4075:
case 1013:
case 611:
case 1465:
case 3072:
case 1065:
case 1871:
case 2510:
case 416:
case 854:
case 3238:
case 3502:
case 1971:
case 704:
case 1314:
case 2030:
case 1782:
case 1719:
case 744:
case 1201:
case 273:
case 3918:
case 1591:
case 3250:
case 1578:
case 2548:
case 3903:
case 3055:
case 2915:
case 4090:
case 3986:
case 479:
case 2963:
case 298:
case 152:
case 938:
case 3511:
case 4052:
case 755:
case 1832:
case 2087:
case 2029:
case 805:
case 3093:
case 3940:
case 1898:
case 1306:
case 675:
case 3137:
case 3803:
case 2224:
case 2181:
case 3493:
case 1642:
case 1383:
case 2487:
case 3774:
case 3431:
case 2999:
case 3480:
case 378:
case 3923:
case 1634:
case 714:
case 911:
case 150:
case 2158:
case 2703:
case 2947:
case 1977:
case 3080:
case 2874:
case 3715:
case 1549:
case 563:
case 3446:
case 446:
case 601:
case 3264:
case 2974:
case 871:
case 2594:
case 641:
case 4006:
case 584:
case 3172:
case 1028:
case 1326:
case 147:
case 244:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744999201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,];
var gg_b = "1744999201/";

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
