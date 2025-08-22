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
var o = 0;
switch (g) {
case 1089:
case 1730:
case 3267:
case 3263:
case 3276:
case 3618:
case 1699:
case 2387:
case 2775:
case 404:
case 557:
case 3231:
case 1972:
case 722:
case 3998:
case 2291:
case 824:
case 3849:
case 495:
case 2757:
case 633:
case 2703:
case 39:
case 1919:
case 1564:
case 939:
case 2856:
case 2288:
case 1915:
case 996:
case 3845:
case 2342:
case 91:
case 199:
case 2718:
case 1910:
case 3675:
case 1432:
case 694:
case 3368:
case 1851:
case 3840:
case 3427:
case 2326:
case 2478:
case 1080:
case 605:
case 2712:
case 2348:
case 1321:
case 3603:
case 1690:
case 1085:
case 2619:
case 2842:
case 2306:
case 1145:
case 273:
case 1351:
case 3151:
case 1632:
case 611:
case 3340:
case 602:
case 3939:
case 3623:
case 3627:
case 3101:
case 652:
case 3280:
case 1495:
case 3654:
case 766:
case 1781:
case 1211:
case 3715:
case 3403:
case 3407:
case 2848:
case 363:
case 1063:
case 17:
case 725:
case 872:
case 888:
case 1031:
case 2384:
case 2723:
case 2883:
case 2727:
case 3772:
case 3935:
case 1792:
case 3686:
case 2610:
case 418:
case 269:
case 3412:
case 3930:
case 3349:
case 1567:
case 1576:
case 683:
case 1149:
case 3485:
case 3257:
case 1004:
case 3207:
case 1290:
case 1411:
case 3747:
case 3532:
case 3743:
case 121:
case 1527:
case 3791:
case 1523:
case 2092:
case 3275:
case 2592:
case 3032:
case 1113:
case 1117:
case 3538:
case 3313:
case 1736:
case 876:
case 41:
case 2688:
case 496:
case 1504:
case 2374:
case 1833:
case 439:
case 153:
case 3212:
case 1334:
case 2873:
case 995:
case 1861:
case 1086:
case 954:
case 2444:
case 762:
case 2643:
case 2320:
case 864:
case 549:
case 1102:
case 1299:
case 2805:
case 3302:
case 904:
case 3352:
case 2800:
case 2911:
case 3828:
case 2581:
case 103:
case 3489:
case 3218:
case 3464:
case 417:
case 745:
case 2785:
case 2373:
case 2825:
case 2377:
case 229:
case 1988:
case 1333:
case 489:
case 837:
case 2215:
case 558:
case 1079:
case 2447:
case 2820:
case 3808:
case 3716:
case 742:
case 2443:
case 3599:
case 844:
case 2539:
case 992:
case 3431:
case 1146:
case 4093:
case 819:
case 508:
case 2300:
case 2193:
case 3476:
case 3664:
case 2197:
case 765:
case 3090:
case 1007:
case 83:
case 1570:
case 3254:
case 2482:
case 1611:
case 2530:
case 1575:
case 3095:
case 2309:
case 2616:
case 3744:
case 301:
case 3971:
case 1524:
case 1232:
case 1991:
case 1024:
case 398:
case 1943:
case 3314:
case 1947:
case 1557:
case 185:
case 2764:
case 2996:
case 1507:
case 3590:
case 180:
case 1070:
case 2069:
case 1331:
case 2084:
case 3131:
case 484:
case 798:
case 1602:
case 3167:
case 1376:
case 1428:
case 2497:
case 467:
case 2493:
case 3163:
case 275:
case 2694:
case 2336:
case 1864:
case 2441:
case 3433:
case 3437:
case 1196:
case 326:
case 238:
case 2191:
case 4047:
case 701:
case 2584:
case 2914:
case 948:
case 2147:
case 2565:
case 1617:
case 3040:
case 1051:
case 1414:
case 1268:
case 1001:
case 2922:
case 2006:
case 3973:
case 3966:
case 3045:
case 2560:
case 2056:
case 360:
case 2734:
case 1885:
case 1941:
case 3950:
case 2182:
case 3221:
case 1725:
case 680:
case 1774:
case 1993:
case 3811:
case 685:
case 4082:
case 1997:
case 3955:
case 58:
case 2065:
case 2946:
case 3540:
case 1262:
case 1551:
case 678:
case 3201:
case 2958:
case 3562:
case 1240:
case 2908:
case 3920:
case 2526:
case 1700:
case 3925:
case 2548:
case 340:
case 2048:
case 493:
case 2733:
case 2737:
case 3311:
case 2542:
case 635:
case 1385:
case 1766:
case 1773:
case 1994:
case 630:
case 2761:
case 4016:
case 2026:
case 53:
case 362:
case 2871:
case 2083:
case 1646:
case 2087:
case 1831:
case 959:
case 2697:
case 3164:
case 2693:
case 3189:
case 2494:
case 1876:
case 653:
case 156:
case 1863:
case 1867:
case 3633:
case 106:
case 3434:
case 3896:
case 1622:
case 858:
case 891:
case 537:
case 428:
case 1759:
case 2913:
case 288:
case 1458:
case 2144:
case 272:
case 968:
case 2587:
case 3514:
case 3969:
case 3984:
case 2009:
case 2892:
case 102:
case 7:
case 1195:
case 3838:
case 111:
case 1303:
case 677:
case 80:
case 3390:
case 1307:
case 1353:
case 1804:
case 1357:
case 2330:
case 96:
case 28:
case 320:
case 2949:
case 85:
case 3170:
case 1213:
case 1324:
case 1668:
case 3124:
case 2509:
case 641:
case 1787:
case 2898:
case 1375:
case 1440:
case 448:
case 3179:
case 1208:
case 1379:
case 1258:
case 1061:
case 2339:
case 1449:
case 2077:
case 2500:
case 3528:
case 2066:
case 2881:
case 3234:
case 1037:
case 779:
case 67:
case 366:
case 538:
case 1742:
case 2050:
case 1318:
case 1533:
case 2577:
case 967:
case 3960:
case 2566:
case 2000:
case 287:
case 264:
case 3965:
case 2005:
case 1202:
case 468:
case 971:
case 3261:
case 1765:
case 928:
case 1649:
case 3233:
case 797:
case 2381:
case 3942:
case 1756:
case 2293:
case 1534:
case 237:
case 829:
case 1706:
case 313:
case 636:
case 2574:
case 1818:
case 459:
case 1246:
case 2701:
case 3899:
case 3002:
case 3926:
case 3052:
case 3338:
case 3517:
case 4078:
case 3895:
case 1462:
case 194:
case 3421:
case 155:
case 1857:
case 699:
case 1354:
case 150:
case 1803:
case 3154:
case 993:
case 3890:
case 100:
case 2830:
case 743:
case 2119:
case 23:
case 1323:
case 3127:
case 3123:
case 1875:
case 3013:
case 661:
case 3332:
case 2835:
case 1784:
case 3017:
case 2217:
case 1335:
case 878:
case 2324:
case 3135:
case 1559:
case 882:
case 2213:
case 2440:
case 498:
case 2375:
case 2787:
case 252:
case 784:
case 3130:
case 3642:
case 1330:
case 3819:
case 1949:
case 2445:
case 2190:
case 835:
case 830:
case 4090:
case 1892:
case 211:
case 4095:
case 1059:
case 3626:
case 1055:
case 2252:
case 3683:
case 2199:
case 3484:
case 3469:
case 2202:
case 2533:
case 2318:
case 963:
case 2537:
case 187:
case 3097:
case 853:
case 1000:
case 1573:
case 1566:
case 1881:
case 1066:
case 1073:
case 803:
case 389:
case 3225:
case 2449:
case 3274:
case 2033:
case 2312:
case 3541:
case 2037:
case 3815:
case 3951:
case 3220:
case 691:
case 2208:
case 1940:
case 3762:
case 3810:
case 1339:
case 2886:
case 3901:
case 2726:
case 144:
case 1701:
case 2246:
case 506:
case 3483:
case 3684:
case 3255:
case 1751:
case 3487:
case 3200:
case 2228:
case 2534:
case 317:
case 1525:
case 3921:
case 74:
case 3094:
case 2706:
case 649:
case 3745:
case 1241:
case 1115:
case 916:
case 2812:
case 3315:
case 3594:
case 1381:
case 2034:
case 3273:
case 3277:
case 2222:
case 3181:
case 614:
case 2765:
case 2386:
case 1110:
case 1020:
case 1968:
case 2879:
case 556:
case 1398:
case 2468:
case 1172:
case 4032:
case 734:
case 2640:
case 2769:
case 2824:
case 2132:
case 832:
case 747:
case 2870:
case 1029:
case 396:
case 31:
case 410:
case 997:
case 2857:
case 2304:
case 255:
case 3660:
case 3749:
case 3448:
case 2354:
case 728:
case 3259:
case 294:
case 4038:
case 3192:
case 2462:
case 3378:
case 3426:
case 3844:
case 3391:
case 3343:
case 3347:
case 1584:
case 1143:
case 2422:
case 3477:
case 2196:
case 1694:
case 175:
case 2363:
case 3400:
case 1497:
case 2376:
case 463:
case 3136:
case 2729:
case 1336:
case 3450:
case 3405:
case 1084:
case 3717:
case 1069:
case 3455:
case 1371:
case 912:
case 3459:
case 3708:
case 748:
case 2551:
case 3226:
case 901:
case 3758:
case 2725:
case 2941:
case 2885:
case 1506:
case 1060:
case 2993:
case 2774:
case 3242:
case 1560:
case 1006:
case 502:
case 3937:
case 1188:
case 2268:
case 2051:
case 2414:
case 3752:
case 1565:
case 998:
case 951:
case 861:
case 3702:
case 2001:
case 1026:
case 1902:
case 500:
case 768:
case 1761:
case 2380:
case 1116:
case 709:
case 1737:
case 877:
case 1048:
case 2777:
case 3722:
case 2021:
case 2773:
case 3882:
case 2385:
case 497:
case 3888:
case 910:
case 1042:
case 594:
case 3429:
case 3934:
case 915:
case 1548:
case 2750:
case 65:
case 1958:
case 2413:
case 2705:
case 555:
case 841:
case 550:
case 3843:
case 1917:
case 1587:
case 172:
case 2709:
case 3891:
case 1144:
case 1913:
case 2249:
case 206:
case 49:
case 3677:
case 607:
case 3666:
case 1494:
case 1693:
case 3600:
case 1697:
case 1836:
case 2867:
case 443:
case 1641:
case 256:
case 2876:
case 3605:
case 2646:
case 1083:
case 304:
case 2402:
case 3284:
case 2831:
case 2554:
case 1688:
case 230:
case 1329:
case 3129:
case 2736:
case 561:
case 235:
case 1767:
case 3019:
case 3230:
case 940:
case 10:
case 1776:
case 2023:
case 1592:
case 3578:
case 1098:
case 811:
case 2027:
case 1731:
case 1859:
case 221:
case 422:
case 754:
case 1809:
case 2295:
case 599:
case 2527:
case 962:
case 3964:
case 3519:
case 3989:
case 2004:
case 3796:
case 15:
case 795:
case 1682:
case 790:
case 2290:
case 3636:
case 1581:
case 1911:
case 1800:
case 107:
case 3394:
case 1850:
case 1194:
case 672:
case 536:
case 1805:
case 688:
case 2102:
case 2152:
case 2916:
case 1444:
case 2158:
case 4008:
case 1647:
case 2086:
case 4058:
case 2108:
case 1691:
case 3120:
case 368:
case 2837:
case 253:
case 1374:
case 1873:
case 157:
case 3125:
case 3150:
case 2512:
case 3436:
case 2018:
case 1350:
case 1197:
case 1193:
case 1300:
case 327:
case 3155:
case 1539:
case 4046:
case 586:
case 2146:
case 2579:
case 3105:
case 1443:
case 1644:
case 2079:
case 1491:
case 624:
case 348:
case 2361:
case 129:
case 3166:
case 1373:
case 833:
case 1366:
case 1785:
case 926:
case 2012:
case 2337:
case 2333:
case 1874:
case 2518:
case 1219:
case 541:
case 855:
case 280:
case 1996:
case 2507:
case 425:
case 1764:
case 1789:
case 2024:
case 4014:
case 2991:
case 2232:
case 2947:
case 2943:
case 792:
case 2075:
case 3931:
case 3292:
case 232:
case 1309:
case 2575:
case 718:
case 3159:
case 1535:
case 2003:
case 2570:
case 3963:
case 3967:
case 2007:
case 1482:
case 236:
case 3481:
case 2296:
case 1753:
case 3790:
case 1707:
case 2589:
case 1415:
case 1247:
case 3639:
case 328:
case 3795:
case 1932:
case 1938:
case 3271:
case 1775:
case 1383:
case 1387:
case 553:
case 3544:
case 2699:
case 2735:
case 1884:
case 1869:
case 114:
case 1724:
case 3236:
case 2089:
case 619:
case 3904:
case 71:
case 3954:
case 913:
case 347:
case 63:
case 739:
case 1282:
case 2085:
case 2690:
case 2321:
case 3126:
case 462:
case 1478:
case 1326:
case 2162:
case 261:
case 3492:
case 922:
case 2080:
case 2438:
case 4062:
case 4068:
case 3799:
case 3516:
case 2910:
case 3986:
case 2580:
case 3635:
case 2585:
case 2915:
case 1288:
case 1419:
case 1718:
case 445:
case 1342:
case 578:
case 3630:
case 3082:
case 2781:
case 3918:
case 68:
case 789:
case 2211:
case 585:
case 1678:
case 1216:
case 1786:
case 580:
case 3165:
case 2495:
case 2632:
case 2301:
case 676:
case 532:
case 1619:
case 4045:
case 3912:
case 687:
case 2576:
case 2567:
case 108:
case 1571:
case 3047:
case 1610:
case 2531:
case 1384:
case 2031:
case 1369:
case 3732:
case 1995:
case 3543:
case 191:
case 2798:
case 158:
case 2076:
case 2067:
case 3907:
case 1036:
case 367:
case 806:
case 3953:
case 3957:
case 1620:
case 118:
case 1391:
case 3584:
case 1347:
case 3914:
case 3147:
case 2634:
case 486:
case 1674:
case 2396:
case 2049:
case 1400:
case 2549:
case 3694:
case 1450:
case 3336:
case 4063:
case 47:
case 816:
case 648:
case 192:
case 2131:
case 1405:
case 3371:
case 1283:
case 1455:
case 1287:
case 4031:
case 1708:
case 1816:
case 1758:
case 2905:
case 1409:
case 242:
case 2221:
case 62:
case 729:
case 3928:
case 3060:
case 2900:
case 3922:
case 2977:
case 3006:
case 265:
case 2045:
case 3560:
case 1242:
case 531:
case 980:
case 1933:
case 897:
case 1388:
case 1752:
case 1265:
case 4080:
case 3902:
case 1659:
case 461:
case 2180:
case 3116:
case 3733:
case 4085:
case 1882:
case 2185:
case 1728:
case 930:
case 1888:
case 2793:
case 522:
case 3548:
case 1206:
case 1934:
case 2741:
case 3042:
case 240:
case 2562:
case 3908:
case 2251:
case 2920:
case 1847:
case 1843:
case 3583:
case 513:
case 3144:
case 1891:
case 372:
case 3587:
case 2633:
case 2434:
case 2929:
case 1425:
case 2637:
case 1673:
case 1474:
case 1677:
case 70:
case 3836:
case 3693:
case 1650:
case 4064:
case 903:
case 3871:
case 3083:
case 3087:
case 104:
case 274:
case 1135:
case 791:
case 2124:
case 2832:
case 2014:
case 2451:
case 4024:
case 1872:
case 1819:
case 4070:
case 1406:
case 977:
case 220:
case 3949:
case 542:
case 2170:
case 485:
case 2107:
case 2103:
case 815:
case 769:
case 4007:
case 810:
case 1648:
case 66:
case 2514:
case 2984:
case 1878:
case 3009:
case 3892:
case 941:
case 3059:
case 231:
case 432:
case 1768:
case 364:
case 526:
case 3005:
case 2118:
case 3294:
case 3577:
case 1093:
case 3573:
case 1097:
case 387:
case 1225:
case 1593:
case 2022:
case 3500:
case 4012:
case 3073:
case 3945:
case 3066:
case 2234:
case 1815:
case 3550:
case 3505:
case 2546:
case 2179:
case 1220:
case 3555:
case 1139:
case 1762:
case 1205:
case 2926:
case 2508:
case 2052:
case 1255:
case 3751:
case 1669:
case 1740:
case 2558:
case 1483:
case 2948:
case 403:
case 117:
case 3241:
case 1094:
case 213:
case 1921:
case 3574:
case 1594:
case 1315:
case 2237:
case 2233:
case 453:
case 3025:
case 1277:
case 1266:
case 319:
case 2942:
case 634:
case 2186:
case 2552:
case 2261:
case 3839:
case 1310:
case 2502:
case 3020:
case 2601:
case 1198:
case 801:
case 3172:
case 2127:
case 2123:
case 3398:
case 714:
case 1372:
case 2332:
case 2017:
case 196:
case 3029:
case 1319:
case 3830:
case 430:
case 1749:
case 4054:
case 749:
case 3529:
case 2154:
case 2890:
case 478:
case 2338:
case 1259:
case 2983:
case 2517:
case 482:
case 545:
case 1426:
case 1378:
case 851:
case 1209:
case 2895:
case 222:
case 540:
case 1192:
case 2849:
case 349:
case 2612:
case 3415:
case 406:
case 617:
case 3703:
case 3707:
case 1927:
case 3243:
case 1639:
case 1923:
case 3932:
case 3291:
case 1795:
case 2486:
case 2679:
case 3410:
case 128:
case 3383:
case 1271:
case 3775:
case 134:
case 314:
case 3869:
case 3884:
case 456:
case 243:
case 826:
case 1904:
case 73:
case 1954:
case 2618:
case 61:
case 297:
case 2454:
case 860:
case 3712:
case 2657:
case 719:
case 3348:
case 193:
case 2607:
case 950:
case 510:
case 3326:
case 3865:
case 2362:
case 994:
case 1016:
case 1986:
case 1516:
case 842:
case 2840:
case 1498:
case 3419:
case 3856:
case 2670:
case 2845:
case 2981:
case 2511:
case 737:
case 1588:
case 840:
case 551:
case 2715:
case 3360:
case 3848:
case 1692:
case 3216:
case 3678:
case 911:
case 2710:
case 2868:
case 2475:
case 2151:
case 2340:
case 4001:
case 2939:
case 2424:
case 2627:
case 3672:
case 4051:
case 2101:
case 3842:
case 512:
case 3306:
case 16:
case 373:
case 1106:
case 1582:
case 1156:
case 3754:
case 3536:
case 1681:
case 776:
case 2349:
case 3615:
case 2096:
case 1970:
case 2935:
case 523:
case 2778:
case 308:
case 2479:
case 2:
case 1047:
case 1543:
case 184:
case 1184:
case 1547:
case 1732:
case 3384:
case 1591:
case 391:
case 1907:
case 1903:
case 1957:
case 1953:
case 167:
case 78:
case 2289:
case 2418:
case 1129:
case 405:
case 3329:
case 3688:
case 30:
case 3767:
case 597:
case 1072:
case 3098:
case 2814:
case 831:
case 2317:
case 1235:
case 2224:
case 2313:
case 2747:
case 2532:
case 772:
case 494:
case 3859:
case 3598:
case 3809:
case 3092:
case 1796:
case 2253:
case 1989:
case 1519:
case 825:
case 2203:
case 307:
case 866:
case 1636:
case 433:
case 1893:
case 2788:
case 3194:
case 690:
case 2663:
case 3850:
case 2676:
case 1985:
case 2667:
case 1671:
case 516:
case 3805:
case 2846:
case 1980:
case 2631:
case 3855:
case 654:
case 1239:
case 3444:
case 3643:
case 2212:
case 906:
case 3877:
case 109:
case 223:
case 846:
case 3350:
case 3141:
case 1436:
case 1341:
case 1397:
case 2476:
case 1393:
case 3539:
case 2852:
case 3355:
case 1105:
case 2099:
case 2802:
case 2346:
case 618:
case 2808:
case 4061:
case 2858:
case 148:
case 3785:
case 4037:
case 3373:
case 3825:
case 2322:
case 813:
case 3874:
case 2137:
case 1711:
case 770:
case 3030:
case 3219:
case 3488:
case 3789:
case 2590:
case 3035:
case 452:
case 298:
case 3272:
case 2314:
case 724:
case 881:
case 212:
case 2095:
case 3309:
case 3616:
case 2744:
case 738:
case 1159:
case 201:
case 3359:
case 2090:
case 2685:
case 1967:
case 1963:
case 2204:
case 2964:
case 2519:
case 2989:
case 2796:
case 1253:
case 640:
case 3411:
case 3290:
case 706:
case 1038:
case 1743:
case 321:
case 1532:
case 2078:
case 3295:
case 3527:
case 2572:
case 3023:
case 662:
case 2072:
case 1538:
case 3117:
case 1317:
case 43:
case 330:
case 110:
case 2019:
case 115:
case 3696:
case 2174:
case 3837:
case 4025:
case 353:
case 3833:
case 4074:
case 1134:
case 209:
case 1822:
case 1782:
case 534:
case 988:
case 3108:
case 547:
case 2120:
case 1308:
case 268:
case 1846:
case 1302:
case 3299:
case 2671:
case 3102:
case 1352:
case 2980:
case 3916:
case 259:
case 2636:
case 1828:
case 2841:
case 437:
case 2985:
case 2394:
case 1464:
case 1218:
case 1676:
case 1489:
case 1663:
case 2173:
case 1322:
case 2166:
case 584:
case 3122:
case 3834:
case 817:
case 2711:
case 4073:
case 3337:
case 1137:
case 938:
case 1161:
case 248:
case 1286:
case 1858:
case 4005:
case 2471:
case 2155:
case 924:
case 1346:
case 1802:
case 1099:
case 3579:
case 2105:
case 839:
case 3512:
case 4000:
case 2341:
case 487:
case 2894:
case 2436:
case 3018:
case 626:
case 2393:
case 3128:
case 4050:
case 2100:
case 970:
case 1328:
case 1664:
case 1689:
case 2397:
case 227:
case 0:
case 1254:
case 3570:
case 2976:
case 660:
case 1685:
case 3007:
case 1090:
case 1204:
case 3053:
case 2109:
case 112:
case 1971:
case 3238:
case 2159:
case 198:
case 1813:
case 642:
case 3991:
case 3232:
case 3947:
case 3943:
case 1227:
case 3075:
case 3553:
case 3557:
case 48:
case 3070:
case 2236:
case 3064:
case 3089:
case 646:
case 143:
case 705:
case 1618:
case 247:
case 1263:
case 1267:
case 3730:
case 700:
case 944:
case 3978:
case 3735:
case 4083:
case 794:
case 2639:
case 271:
case 1998:
case 2927:
case 228:
case 2795:
case 2044:
case 116:
case 3296:
case 750:
case 1612:
case 613:
case 2790:
case 3589:
case 3564:
case 755:
case 919:
case 733:
case 24:
case 3915:
case 1845:
case 2799:
case 2516:
case 622:
case 2986:
case 2498:
case 1427:
case 1423:
case 3851:
case 1624:
case 1362:
case 3739:
case 3162:
case 361:
case 2492:
case 4026:
case 3438:
case 3695:
case 2148:
case 1454:
case 1121:
case 3690:
case 1607:
case 293:
case 2106:
case 4056:
case 3145:
case 26:
case 1470:
case 377:
case 4006:
case 2582:
case 2156:
case 2088:
case 1475:
case 1868:
case 1101:
case 1627:
case 1623:
case 3301:
case 1424:
case 52:
case 1710:
case 1862:
case 2165:
case 3495:
case 2082:
case 2918:
case 179:
case 1654:
case 3821:
case 620:
case 1453:
case 3490:
case 1403:
case 976:
case 1604:
case 37:
case 2903:
case 666:
case 3076:
case 3063:
case 1596:
case 475:
case 1264:
case 1289:
case 267:
case 2953:
case 548:
case 2957:
case 987:
case 2732:
case 964:
case 2169:
case 2184:
case 284:
case 3499:
case 2543:
case 1772:
case 3798:
case 2591:
case 854:
case 4084:
case 2924:
case 2439:
case 804:
case 1778:
case 2047:
case 1:
case 2043:
case 702:
case 438:
case 527:
case 1930:
case 2681:
case 386:
case 3563:
case 3149:
case 1096:
case 2465:
case 302:
case 1395:
case 131:
case 3307:
case 3303:
case 1153:
case 3357:
case 3804:
case 2130:
case 2642:
case 2456:
case 2819:
case 125:
case 973:
case 3370:
case 2229:
case 679:
case 1832:
case 1124:
case 3668:
case 2135:
case 3213:
case 174:
case 1401:
case 3827:
case 2872:
case 3440:
case 1014:
case 3787:
case 3823:
case 4035:
case 352:
case 3208:
case 1546:
case 4039:
case 2762:
case 3061:
case 3886:
case 3726:
case 2597:
case 1022:
case 289:
case 2593:
case 2225:
case 3748:
case 663:
case 166:
case 3033:
case 3312:
case 3037:
case 3533:
case 383:
case 3537:
case 1118:
case 2097:
case 1522:
case 868:
case 6:
case 3561:
case 2768:
case 2683:
case 3202:
case 958:
case 1965:
case 1058:
case 3386:
case 1008:
case 1233:
case 1237:
case 4081:
case 2266:
case 504:
case 2273:
case 146:
case 239:
case 554:
case 3228:
case 217:
case 1948:
case 3756:
case 3818:
case 2094:
case 616:
case 2745:
case 848:
case 1899:
case 3246:
case 2483:
case 2740:
case 2669:
case 2487:
case 1052:
case 1987:
case 1517:
case 181:
case 1983:
case 1513:
case 1338:
case 394:
case 2192:
case 3462:
case 2426:
case 3857:
case 3304:
case 3853:
case 736:
case 82:
case 45:
case 3803:
case 3354:
case 300:
case 296:
case 40:
case 3645:
case 21:
case 2606:
case 2372:
case 1017:
case 3769:
case 1332:
case 2405:
case 458:
case 3652:
case 491:
case 828:
case 589:
case 3331:
case 1959:
case 1163:
case 3367:
case 780:
case 3363:
case 3376:
case 1167:
case 2450:
case 1437:
case 929:
case 1634:
case 847:
case 3422:
case 1396:
case 2674:
case 2473:
case 3196:
case 469:
case 834:
case 218:
case 1461:
case 3608:
case 2347:
case 3658:
case 601:
case 3613:
case 1040:
case 2961:
case 2702:
case 612:
case 1966:
case 1045:
case 1973:
case 1977:
case 473:
case 2933:
case 3941:
case 3885:
case 1900:
case 1545:
case 2708:
case 3720:
case 698:
case 3614:
case 2746:
case 3705:
case 3417:
case 1068:
case 1251:
case 1793:
case 3521:
case 1974:
case 3700:
case 90:
case 2429:
case 1741:
case 2206:
case 2260:
case 95:
case 3111:
case 1185:
case 2722:
case 610:
case 3994:
case 753:
case 86:
case 3766:
case 1062:
case 596:
case 162:
case 3380:
case 51:
case 1180:
case 414:
case 2714:
case 3452:
case 3402:
case 3831:
case 2284:
case 2269:
case 907:
case 735:
case 1164:
case 3364:
case 730:
case 356:
case 3876:
case 3249:
case 1637:
case 2425:
case 1929:
case 1434:
case 306:
case 867:
case 2666:
case 295:
case 3759:
case 2843:
case 782:
case 254:
case 2420:
case 517:
case 2847:
case 3408:
case 721:
case 3458:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755882001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,];
var gg_b = "1755882001/";

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
