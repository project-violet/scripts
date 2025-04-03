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
case 2946:
case 2491:
case 3438:
case 2346:
case 2303:
case 402:
case 4074:
case 913:
case 787:
case 4078:
case 3121:
case 2011:
case 3452:
case 3614:
case 2882:
case 3770:
case 3509:
case 4094:
case 3511:
case 522:
case 2444:
case 1925:
case 2448:
case 2177:
case 2435:
case 1347:
case 4052:
case 95:
case 2015:
case 219:
case 2229:
case 1136:
case 342:
case 4045:
case 30:
case 3996:
case 3441:
case 1081:
case 1812:
case 2514:
case 2495:
case 3566:
case 4038:
case 420:
case 1067:
case 2740:
case 2283:
case 2431:
case 3498:
case 2609:
case 3014:
case 2066:
case 2820:
case 919:
case 25:
case 1321:
case 1500:
case 2137:
case 2475:
case 3515:
case 3018:
case 1799:
case 645:
case 3793:
case 1465:
case 2602:
case 3021:
case 1256:
case 2109:
case 353:
case 1918:
case 3577:
case 412:
case 1185:
case 795:
case 2417:
case 903:
case 2222:
case 967:
case 2204:
case 3773:
case 1772:
case 3967:
case 2257:
case 1450:
case 13:
case 2300:
case 254:
case 1096:
case 19:
case 876:
case 3981:
case 2384:
case 3524:
case 263:
case 925:
case 2280:
case 2677:
case 1487:
case 3047:
case 1036:
case 1461:
case 2988:
case 2706:
case 3537:
case 3025:
case 3385:
case 396:
case 2037:
case 3985:
case 3733:
case 963:
case 336:
case 888:
case 2547:
case 1676:
case 359:
case 1805:
case 510:
case 2166:
case 2024:
case 3459:
case 909:
case 3810:
case 1732:
case 207:
case 2697:
case 2889:
case 2856:
case 3547:
case 443:
case 957:
case 1046:
case 845:
case 2385:
case 1003:
case 1536:
case 307:
case 3024:
case 2810:
case 264:
case 3889:
case 3002:
case 2621:
case 1909:
case 3166:
case 1911:
case 936:
case 1822:
case 1804:
case 1100:
case 21:
case 2524:
case 959:
case 4017:
case 3388:
case 3706:
case 2537:
case 3677:
case 2201:
case 1857:
case 3823:
case 2047:
case 1808:
case 309:
case 1315:
case 369:
case 2773:
case 1576:
case 2647:
case 3204:
case 1464:
case 1188:
case 2625:
case 78:
case 354:
case 3521:
case 2597:
case 3900:
case 1468:
case 3257:
case 303:
case 1223:
case 4086:
case 1966:
case 3109:
case 3624:
case 2793:
case 367:
case 3097:
case 3602:
case 726:
case 3628:
case 3637:
case 3417:
case 317:
case 35:
case 1581:
case 3611:
case 3283:
case 2498:
case 3431:
case 3609:
case 2014:
case 3820:
case 688:
case 2376:
case 2494:
case 3128:
case 784:
case 1103:
case 3475:
case 4071:
case 2125:
case 550:
case 2147:
case 1763:
case 4091:
case 2441:
case 20:
case 1000:
case 2996:
case 2730:
case 26:
case 1829:
case 1749:
case 3471:
case 2509:
case 676:
case 2511:
case 1426:
case 914:
case 3177:
case 4031:
case 139:
case 2336:
case 3448:
case 1328:
case 3303:
case 1937:
case 1928:
case 3903:
case 96:
case 1220:
case 3346:
case 2770:
case 3882:
case 2614:
case 3666:
case 1902:
case 1302:
case 752:
case 1373:
case 2062:
case 1973:
case 2143:
case 1767:
case 390:
case 3372:
case 516:
case 1079:
case 1781:
case 2351:
case 2951:
case 2530:
case 1850:
case 3287:
case 2766:
case 1563:
case 1401:
case 4056:
case 3562:
case 711:
case 3392:
case 1107:
case 633:
case 1158:
case 3992:
case 2590:
case 484:
case 3307:
case 2268:
case 1861:
case 3358:
case 83:
case 1933:
case 1785:
case 3250:
case 870:
case 2360:
case 2709:
case 2640:
case 1039:
case 2711:
case 3932:
case 3954:
case 1549:
case 3193:
case 3354:
case 816:
case 3630:
case 3859:
case 1679:
case 2342:
case 3173:
case 2886:
case 637:
case 697:
case 1405:
case 3456:
case 2169:
case 2355:
case 328:
case 2955:
case 2482:
case 160:
case 1294:
case 3834:
case 1672:
case 506:
case 2349:
case 866:
case 3130:
case 1179:
case 747:
case 1990:
case 1736:
case 1298:
case 1853:
case 3747:
case 977:
case 2162:
case 3673:
case 3827:
case 2043:
case 3543:
case 701:
case 1007:
case 3033:
case 2728:
case 1241:
case 1274:
case 2871:
case 2702:
case 2844:
case 3693:
case 1032:
case 2724:
case 1054:
case 1370:
case 1970:
case 749:
case 1542:
case 2140:
case 3170:
case 1139:
case 3721:
case 2797:
case 1412:
case 382:
case 1092:
case 1607:
case 973:
case 3878:
case 3413:
case 3569:
case 3399:
case 3894:
case 1252:
case 2069:
case 2875:
case 534:
case 3190:
case 806:
case 1796:
case 1330:
case 1245:
case 1930:
case 3253:
case 2831:
case 100:
case 1227:
case 273:
case 3875:
case 897:
case 3606:
case 2190:
case 837:
case 744:
case 1362:
case 982:
case 648:
case 3420:
case 2253:
case 2898:
case 3831:
case 3963:
case 616:
case 1291:
case 3363:
case 1149:
case 2979:
case 2379:
case 274:
case 1248:
case 1051:
case 856:
case 282:
case 1940:
case 1235:
case 1340:
case 63:
case 593:
case 2399:
case 4082:
case 2999:
case 1244:
case 2569:
case 670:
case 2033:
case 495:
case 712:
case 1703:
case 3737:
case 4020:
case 3835:
case 1295:
case 2939:
case 2339:
case 3702:
case 3844:
case 556:
case 1429:
case 1532:
case 1554:
case 3949:
case 1042:
case 2852:
case 2673:
case 1231:
case 2747:
case 2827:
case 1483:
case 3043:
case 3669:
case 1055:
case 3006:
case 3570:
case 606:
case 1217:
case 3489:
case 2630:
case 1306:
case 1788:
case 1906:
case 1943:
case 2173:
case 2456:
case 483:
case 1408:
case 2307:
case 2358:
case 2907:
case 1151:
case 2932:
case 2332:
case 381:
case 2070:
case 928:
case 3711:
case 3640:
case 2287:
case 2714:
case 3766:
case 1868:
case 3530:
case 1864:
case 4089:
case 74:
case 930:
case 2718:
case 1160:
case 694:
case 634:
case 3143:
case 3106:
case 798:
case 2690:
case 738:
case 27:
case 145:
case 2972:
case 230:
case 489:
case 1142:
case 1063:
case 2398:
case 3331:
case 2568:
case 2879:
case 2290:
case 2712:
case 208:
case 2564:
case 3375:
case 1191:
case 626:
case 2476:
case 700:
case 1862:
case 2394:
case 2153:
case 1477:
case 68:
case 2270:
case 2899:
case 1135:
case 2661:
case 2016:
case 3064:
case 2978:
case 4003:
case 2941:
case 292:
case 1171:
case 3565:
case 2496:
case 3395:
case 143:
case 4046:
case 161:
case 1720:
case 3995:
case 2839:
case 2650:
case 589:
case 1559:
case 2061:
case 3348:
case 3664:
case 3783:
case 3935:
case 3335:
case 149:
case 1263:
case 2327:
case 2338:
case 760:
case 2938:
case 3991:
case 3446:
case 1437:
case 2345:
case 1175:
case 2230:
case 2945:
case 2665:
case 1424:
case 1402:
case 3849:
case 268:
case 2352:
case 3855:
case 1117:
case 1675:
case 1091:
case 433:
case 3708:
case 2053:
case 3386:
case 1411:
case 3704:
case 3842:
case 1409:
case 1631:
case 2165:
case 2359:
case 2959:
case 776:
case 3168:
case 3484:
case 1044:
case 1695:
case 331:
case 1534:
case 1552:
case 2150:
case 3553:
case 3026:
case 1527:
case 1538:
case 2858:
case 1545:
case 2116:
case 1048:
case 437:
case 1964:
case 2161:
case 1364:
case 1648:
case 1260:
case 1598:
case 111:
case 2467:
case 2481:
case 1968:
case 1671:
case 1644:
case 3851:
case 456:
case 4088:
case 152:
case 1574:
case 3206:
case 1255:
case 2872:
case 499:
case 280:
case 1031:
case 2719:
case 439:
case 2653:
case 871:
case 1242:
case 672:
case 788:
case 535:
case 1578:
case 4084:
case 595:
case 3317:
case 1652:
case 2780:
case 3701:
case 3872:
case 1595:
case 380:
case 3719:
case 1159:
case 1365:
case 1965:
case 1645:
case 2317:
case 526:
case 1627:
case 2626:
case 58:
case 1916:
case 3892:
case 683:
case 2400:
case 14:
case 102:
case 1893:
case 3481:
case 406:
case 1950:
case 721:
case 1531:
case 291:
case 231:
case 1674:
case 1710:
case 162:
case 3858:
case 1961:
case 1833:
case 2164:
case 2488:
case 1756:
case 2026:
case 2860:
case 2553:
case 1591:
case 1387:
case 2986:
case 1027:
case 1038:
case 120:
case 3526:
case 1694:
case 1045:
case 1548:
case 4081:
case 931:
case 2855:
case 1571:
case 3165:
case 3959:
case 2842:
case 3273:
case 671:
case 1279:
case 3230:
case 3945:
case 884:
case 3338:
case 1353:
case 1194:
case 470:
case 3352:
case 3934:
case 1198:
case 3952:
case 3665:
case 1059:
case 368:
case 2849:
case 2944:
case 112:
case 2971:
case 416:
case 3839:
case 4076:
case 1299:
case 1870:
case 2783:
case 2935:
case 2335:
case 2948:
case 448:
case 1425:
case 3616:
case 2664:
case 3378:
case 1517:
case 2126:
case 1239:
case 3687:
case 750:
case 3270:
case 2395:
case 3050:
case 332:
case 3341:
case 392:
case 3496:
case 3941:
case 3974:
case 3290:
case 1659:
case 144:
case 308:
case 1830:
case 1421:
case 1134:
case 2931:
case 1152:
case 2331:
case 3398:
case 3994:
case 695:
case 3153:
case 3394:
case 2516:
case 1713:
case 2975:
case 2375:
case 3389:
case 3989:
case 2218:
case 171:
case 1082:
case 1811:
case 2787:
case 2356:
case 1443:
case 3083:
case 450:
case 1406:
case 852:
case 4051:
case 2761:
case 2885:
case 3888:
case 2407:
case 2458:
case 612:
case 3323:
case 1957:
case 1308:
case 2583:
case 3923:
case 3460:
case 1357:
case 1304:
case 3180:
case 1904:
case 2101:
case 3215:
case 3884:
case 2454:
case 2432:
case 2012:
case 278:
case 1288:
case 2881:
case 2765:
case 1980:
case 3104:
case 2867:
case 1380:
case 1123:
case 4042:
case 3157:
case 1717:
case 1284:
case 73:
case 2492:
case 940:
case 1513:
case 2716:
case 552:
case 3764:
case 1469:
case 748:
case 3209:
case 978:
case 240:
case 2750:
case 1866:
case 1682:
case 2472:
case 195:
case 3183:
case 638:
case 2876:
case 2605:
case 327:
case 847:
case 1203:
case 3228:
case 2479:
case 766:
case 1246:
case 3463:
case 329:
case 1731:
case 2019:
case 3622:
case 1440:
case 3080:
case 2001:
case 183:
case 2225:
case 2896:
case 4049:
case 602:
case 561:
case 64:
case 1623:
case 543:
case 2753:
case 189:
case 501:
case 1791:
case 3057:
case 4063:
case 2836:
case 1510:
case 2112:
case 1329:
case 2601:
case 3277:
case 1120:
case 2522:
case 1089:
case 1744:
case 620:
case 706:
case 224:
case 3297:
case 1748:
case 1828:
case 3803:
case 1983:
case 2557:
case 923:
case 3504:
case 1276:
case 3557:
case 1056:
case 3221:
case 844:
case 324:
case 2803:
case 1490:
case 1825:
case 3836:
case 4079:
case 1745:
case 512:
case 2008:
case 1847:
case 1727:
case 1738:
case 223:
case 1470:
case 799:
case 1752:
case 2022:
case 2680:
case 3601:
case 3439:
case 2277:
case 1734:
case 756:
case 355:
case 3896:
case 3225:
case 1312:
case 1236:
case 2129:
case 2604:
case 3001:
case 2622:
case 733:
case 1794:
case 7:
case 1778:
case 2224:
case 1656:
case 2183:
case 851:
case 3876:
case 4039:
case 3580:
case 2519:
case 1821:
case 1430:
case 1774:
case 3479:
case 1818:
case 2211:
case 3716:
case 2764:
case 598:
case 4007:
case 2512:
case 4058:
case 1285:
case 340:
case 3867:
case 1319:
case 2104:
case 2122:
case 1301:
case 1520:
case 2451:
case 378:
case 862:
case 2108:
case 915:
case 1267:
case 4072:
case 2888:
case 3458:
case 802:
case 84:
case 32:
case 3612:
case 3432:
case 2029:
case 1759:
case 3119:
case 1582:
case 3218:
case 3910:
case 3310:
case 2989:
case 3885:
case 2266:
case 3214:
case 3356:
case 2083:
case 1354:
case 3549:
case 1954:
case 1216:
case 2151:
case 3039:
case 2422:
case 2404:
case 1070:
case 731:
case 1250:
case 3699:
case 51:
case 1907:
case 3861:
case 557:
case 376:
case 2906:
case 1090:
case 1265:
case 128:
case 3405:
case 4019:
case 1173:
case 3172:
case 559:
case 596:
case 2049:
case 2217:
case 2784:
case 1630:
case 536:
case 3865:
case 2700:
case 836:
case 388:
case 2649:
case 190:
case 859:
case 130:
case 2286:
case 2142:
case 1540:
case 3973:
case 65:
case 553:
case 3373:
case 617:
case 3259:
case 1690:
case 504:
case 2369:
case 81:
case 1992:
case 3158:
case 1133:
case 2864:
case 3107:
case 1392:
case 2160:
case 3099:
case 1718:
case 221:
case 2480:
case 619:
case 3132:
case 2579:
case 2660:
case 1399:
case 542:
case 1569:
case 1413:
case 1878:
case 758:
case 603:
case 2244:
case 3607:
case 1874:
case 3654:
case 669:
case 3412:
case 486:
case 1721:
case 2248:
case 250:
case 3227:
case 2291:
case 300:
case 1253:
case 1898:
case 2642:
case 3930:
case 3551:
case 42:
case 3245:
case 1379:
case 1190:
case 950:
case 2655:
case 3252:
case 667:
case 1894:
case 1838:
case 1827:
case 3560:
case 1673:
case 1747:
case 3853:
case 3736:
case 2507:
case 4012:
case 514:
case 3672:
case 2163:
case 3542:
case 3054:
case 3032:
case 1693:
case 2651:
case 80:
case 3555:
case 1033:
case 3199:
case 1543:
case 177:
case 2054:
case 2278:
case 1724:
case 1702:
case 1871:
case 819:
case 657:
case 3295:
case 513:
case 1835:
case 61:
case 2199:
case 3746:
case 1737:
case 2058:
case 2274:
case 2555:
case 2007:
case 1848:
case 2692:
case 817:
case 768:
case 2736:
case 85:
case 3558:
case 1006:
case 1891:
case 3483:
case 2298:
case 2853:
case 3231:
case 179:
case 2672:
case 3163:
case 260:
case 1482:
case 2294:
case 2179:
case 1949:
case 3275:
case 2930:
case 2551:
case 3149:
case 1363:
case 3291:
case 1963:
case 1420:
case 2252:
case 1643:
case 604:
case 1777:
case 3362:
case 517:
case 653:
case 4029:
case 55:
case 1606:
case 1069:
case 792:
case 2658:
case 900:
case 2092:
case 3271:
case 2607:
case 2776:
case 350:
case 1895:
case 4083:
case 3340:
case 2139:
case 3572:
case 3235:
case 2654:
case 2632:
case 3051:
case 3160:
case 503:
case 841:
case 60:
case 554:
case 2158:
case 465:
case 2107:
case 1530:
case 2393:
case 2154:
case 2993:
case 2401:
case 1040:
case 3480:
case 4057:
case 423:
case 3142:
case 4008:
case 2767:
case 2079:
case 2781:
case 3700:
case 345:
case 3649:
case 2259:
case 4022:
case 1715:
case 1062:
case 4080:
case 2405:
case 429:
case 3943:
case 867:
case 1955:
case 3906:
case 3788:
case 1355:
case 746:
case 3217:
case 3784:
case 976:
case 1942:
case 1342:
case 3404:
case 509:
case 181:
case 427:
case 854:
case 2785:
case 2933:
case 405:
case 2192:
case 276:
case 2333:
case 1360:
case 3457:
case 3408:
case 541:
case 1960:
case 1423:
case 2887:
case 293:
case 3067:
case 4053:
case 2763:
case 1566:
case 3812:
case 2684:
case 1396:
case 3081:
case 1441:
case 3779:
case 1996:
case 142:
case 574:
case 418:
case 1125:
case 582:
case 3136:
case 1478:
case 1813:
case 1147:
case 729:
case 2377:
case 1976:
case 2282:
case 1515:
case 366:
case 933:
case 2103:
case 2397:
case 3500:
case 727:
case 2581:
case 334:
case 3921:
case 2997:
case 394:
case 1121:
case 3584:
case 939:
case 2928:
case 765:
case 2337:
case 2328:
case 3085:
case 3588:
case 2220:
case 1427:
case 2883:
case 1438:
case 3176:
case 239:
case 299:
case 2088:
case 1212:
case 3325:
case 874:
case 882:
case 2749:
case 3196:
case 1511:
case 3667:
case 3503:
case 1025:
case 1537:
case 4065:
case 3036:
case 3487:
case 1047:
case 1219:
case 2808:
case 1201:
case 3546:
case 2804:
case 2822:
case 1524:
case 3696:
case 157:
case 3181:
case 1502:
case 11:
case 2100:
case 1621:
case 1810:
case 679:
case 1114:
case 2309:
case 2311:
case 830:
case 4050:
case 159:
case 890:
case 715:
case 2536:
case 3707:
case 492:
case 1985:
case 1385:
case 2003:
case 432:
case 87:
case 316:
case 3210:
case 3318:
case 590:
case 2366:
case 4087:
case 153:
case 3914:
case 104:
case 348:
case 3465:
case 1981:
case 2468:
case 3096:
case 33:
case 370:
case 3819:
case 2880:
case 1967:
case 3772:
case 3801:
case 2576:
case 1647:
case 2315:
case 3416:
case 3636:
case 3223:
case 1208:
case 2772:
case 103:
case 1257:
case 916:
case 3184:
case 3468:
case 29:
case 2096:
case 1300:
case 1521:
case 154:
case 2416:
case 3188:
case 3464:
case 1769:
case 778:
case 2636:
case 1204:
case 3576:
case 3915:
case 169:
case 948:
case 3315:
case 93:
case 99:
case 2076:
case 3289:
case 970:
case 1628:
case 2185:
case 1097:
case 3751:
case 167:
case 3596:
case 385:
case 3366:
case 2914:
case 3309:
case 3911:
case 1166:
case 3311:
case 1889:
case 1024:
case 107:
case 786:
case 2732:
case 4068:
case 3536:
case 125:
case 458:
case 1547:
case 2676:
case 581:
case 109:
case 2487:
case 1743:
case 1280:
case 1115:
case 1677:
case 3755:
case 1388:
case 2461:
case 1988:
case 1384:
case 2696:
case 141:
case 3804:
case 3742:
case 3822:
case 2325:
case 3088:
case 356:
case 577:
case 339:
case 2347:
case 2667:
case 1471:
case 3749:
case 2196:
case 2681:
case 3600:
case 2213:
case 3924:
case 3302:
case 1197:
case 3324:
case 724:
case 337:
case 3902:
case 1009:
case 1011:
case 2739:
case 2453:
case 3220:
case 873:
case 206:
case 475:
case 2588:
case 3328:
case 690:
case 1137:
case 3146:
case 67:
case 1066:
case 1820:
case 1609:
case 4026:
case 1283:
case 3567:
case 3581:
case 2321:
case 1102:
case 1124:
case 2921:
case 3997:
case 2812:
case 2081:
case 393:
case 3:
case 333:
case 3763:
case 1762:
case 934:
case 3688:
case 2136:
case 755:
case 877:
case 2013:
case 3284:
case 891:
case 1157:
case 692:
case 3815:
case 1108:
case 3123:
case 2520:
case 2301:
case 1122:
case 3380:
case 4043:
case 2319:
case 1104:
case 1800:
case 28:
case 1451:
case 3682:
case 3866:
case 2473:
case 477:
case 704:
case 3513:
case 1455:
case 668:
case 3443:
case 1083:
case 1266:
case 3811:
case 1442:
case 3620:
case 371:
case 3809:
case 759:
case 736:
case 2759:
case 1029:
case 1884:
case 3322:
case 3904:
case 3922:
case 3304:
case 3357:
case 591:
case 1460:
case 473:
case 3957:
case 1323:
case 875:
case 3200:
case 2433:
case 1888:
case 1680:
case 1022:
case 2752:
case 1277:
case 2734:
case 2589:
case 3929:
case 2745:
case 2825:
case 2296:
case 1057:
case 3791:
case 1505:
case 389:
case 3023:
case 2523:
case 3383:
case 1726:
case 2056:
case 3983:
case 3735:
case 1803:
case 2490:
case 3837:
case 3828:
case 3748:
case 1297:
case 3824:
case 2010:
case 3744:
case 1449:
case 3771:
case 1982:
case 2276:
case 646:
case 3120:
case 3795:
case 3246:
case 1320:
case 2741:
case 1228:
case 1237:
case 2774:
case 272:
case 105:
case 2610:
case 3203:
case 284:
case 3689:
case 3897:
case 680:
case 127:
case 1224:
case 2778:
case 1183:
case 481:
case 3462:
case 3877:
case 1657:
case 972:
case 742:
case 1129:
case 2312:
case 3440:
case 1080:
case 1622:
case 3731:
case 532:
case 1913:
case 2877:
case 675:
case 2623:
case 719:
case 1001:
case 2731:
case 1019:
case 1247:
case 3236:
case 4090:
case 3312:
case 428:
case 372:
case 3430:
case 3821:
case 2689:
case 384:
case 2246:
case 1580:
case 1876:
case 3656:
case 2462:
case 75:
case 508:
case 2828:
case 124:
case 808:
case 568:
case 3056:
case 2983:
case 1504:
case 1522:
case 2120:
case 287:
case 2824:
case 3010:
case 2802:
case 2329:
case 1112:
case 1601:
case 3470:
case 3727:
case 430:
case 289:
case 832:
case 3745:
case 631:
case 892:
case 3825:
case 3582:
case 1101:
case 709:
case 2304:
case 4073:
case 1119:
case 1432:
case 2200:
case 3613:
case 3281:
case 1458:
case 971:
case 3433:
case 2908:
case 2357:
case 3267:
case 3305:
case 1356:
case 1761:
case 482:
case 1885:
case 186:
case 725:
case 1910:
case 546:
case 1218:
case 1472:
case 3814:
case 2020:
case 140:
case 3110:
case 2189:
case 4033:
case 818:
case 2469:
case 767:
case 1105:
case 580:
case 2815:
case 935:
case 3013:
case 2284:
case 2717:
case 754:
case 1492:
case 3493:
case 1881:
case 38:
case 1012:
case 2288:
case 3919:
case 2980:
case 3319:
case 1867:
case 829:
case 2447:
case 3326:
case 1935:
case 2586:
case 1664:
case 951:
case 1348:
case 2178:
case 1948:
case 1344:
case 1971:
case 212:
case 2174:
case 3195:
case 1262:
case 3424:
case 1729:
case 3175:
case 805:
case 565:
case 2890:
case 3437:
case 2194:
case 912:
case 1587:
case 441:
case 2127:
case 463:
case 3249:
case 2145:
case 1516:
case 2713:
case 865:
case 3497:
case 2659:
case 409:
case 1863:
case 2152:
case 1995:
case 3720:
case 361:
case 343:
case 1068:
case 4037:
case 158:
case 4028:
case 4002:
case 1064:
case 4024:
case 678:
case 944:
case 1126:
case 1851:
case 2207:
case 202:
case 24:
case 3968:
case 175:
case 2893:
case 2074:
case 3598:
case 3260:
case 4009:
case 3635:
case 3594:
case 3415:
case 2316:
case 3364:
case 2575:
case 2232:
case 2916:
case 1317:
case 3869:
case 3075:
case 3578:
case 2873:
case 2094:
case 3186:
case 2418:
case 790:
case 3031:
case 2414:
case 3466:
case 1780:
case 2652:
case 2634:
case 238:
case 3541:
case 1206:
case 352:
case 2965:
case 2159:
case 298:
case 2544:
case 728:
case 2698:
case 1704:
case 2034:
case 3411:
case 1722:
case 1386:
case 2694:
case 1757:
case 3091:
case 2535:
case 3843:
case 3806:
case 2045:
case 1488:
case 3048:
case 45:
case 3545:
case 3251:
case 2361:
case 417:
case 2591:
case 3035:
case 4066:
case 2387:
case 1553:
case 191:
case 1168:
case 3071:
case 3789:
case 2641:
case 920:
case 262:
case 4014:
case 3387:
case 2538:
case 2527:
case 2048:
case 1116:
case 3678:
case 3361:
case 2044:
case 362:
case 3641:
case 52:
case 1832:
case 3674:
case 2534:
case 4018:
case 3034:
case 586:
case 2675:
case 2117:
case 3548:
case 3694:
case 1053:
case 320:
case 2091:
case 3038:
case 3272:
case 3873:
case 3094:
case 2186:
case 605:
case 3418:
case 2691:
case 3627:
case 911:
case 252:
case 3965:
case 886:
case 2574:
case 3365:
case 3159:
case 1719:
case 180:
case 3414:
case 627:
case 1701:
case 3652:
case 1467:
case 3350:
case 2260:
case 2598:
case 3950:
case 3207:
case 2644:
case 2368:
case 3041:
case 3893:
case 3258:
case 302:
case 34:
case 2968:
case 578:
case 3232:
case 3575:
case 629:
case 1161:
case 3254:
case 2635:
case 2415:
case 1974:
case 2171:
case 192:
case 1341:
case 496:
case 1374:
case 132:
case 2720:
case 1050:
case 2840:
case 459:
case 243:
case 1270:
case 3239:
case 555:
case 464:
case 1016:
case 1978:
case 1378:
case 2017:
case 3713:
case 41:
case 1564:
case 961:
case 2686:
case 773:
case 3127:
case 3138:
case 2191:
case 1994:
case 4047:
case 1398:
case 3152:
case 2497:
case 344:
case 1712:
case 3659:
case 1065:
case 1568:
case 1879:
case 168:
case 949:
case 2424:
case 1952:
case 3198:
case 1352:
case 779:
case 1927:
case 3194:
case 2263:
case 3279:
case 2428:
case 2437:
case 901:
case 1345:
case 777:
case 1616:
case 404:
case 3178:
case 1436:
case 1061:
case 3447:
case 1087:
case 3586:
case 2326:
case 201:
case 1650:
case 3870:
case 312:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743678002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,];
var gg_b = "1743678002/";

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
