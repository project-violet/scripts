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
case 2887:
case 3277:
case 2461:
case 2357:
case 2316:
case 3628:
case 1999:
case 3170:
case 1603:
case 3837:
case 3153:
case 3762:
case 2768:
case 679:
case 3067:
case 2016:
case 3119:
case 2057:
case 2585:
case 772:
case 3758:
case 349:
case 3943:
case 3535:
case 3367:
case 1043:
case 2809:
case 1422:
case 1661:
case 3436:
case 956:
case 2088:
case 3787:
case 3082:
case 3222:
case 3522:
case 401:
case 857:
case 2926:
case 965:
case 3334:
case 448:
case 2677:
case 737:
case 1236:
case 1251:
case 1536:
case 630:
case 883:
case 2032:
case 2854:
case 3038:
case 1129:
case 551:
case 521:
case 129:
case 806:
case 2862:
case 3868:
case 972:
case 2775:
case 3900:
case 3034:
case 2858:
case 1821:
case 3864:
case 3709:
case 2084:
case 2524:
case 2224:
case 756:
case 2332:
case 1000:
case 2635:
case 1685:
case 3821:
case 48:
case 1382:
case 1864:
case 463:
case 1900:
case 1852:
case 3934:
case 2612:
case 1709:
case 2261:
case 2326:
case 2561:
case 3938:
case 2932:
case 3536:
case 1412:
case 3435:
case 3614:
case 2371:
case 896:
case 1222:
case 4041:
case 491:
case 3640:
case 2286:
case 2026:
case 3876:
case 3982:
case 2890:
case 1038:
case 541:
case 149:
case 1875:
case 4060:
case 522:
case 508:
case 2957:
case 3661:
case 428:
case 402:
case 2218:
case 1624:
case 2518:
case 1436:
case 1451:
case 1399:
case 1535:
case 3043:
case 2428:
case 1367:
case 746:
case 538:
case 710:
case 2514:
case 2214:
case 3999:
case 2651:
case 585:
case 1277:
case 1577:
case 1762:
case 3790:
case 3343:
case 1067:
case 1099:
case 269:
case 3603:
case 118:
case 432:
case 1754:
case 2540:
case 3686:
case 2667:
case 3951:
case 2232:
case 548:
case 3538:
case 501:
case 2324:
case 109:
case 3755:
case 2288:
case 3727:
case 3022:
case 399:
case 2903:
case 451:
case 442:
case 783:
case 2024:
case 2584:
case 2284:
case 4029:
case 2765:
case 1200:
case 1500:
case 650:
case 978:
case 1351:
case 2961:
case 837:
case 1881:
case 3141:
case 1107:
case 1312:
case 936:
case 1626:
case 2749:
case 3632:
case 1977:
case 2471:
case 3267:
case 2827:
case 872:
case 2940:
case 2385:
case 3400:
case 3688:
case 1243:
case 1543:
case 592:
case 1717:
case 1731:
case 906:
case 2918:
case 927:
case 957:
case 498:
case 2216:
case 2225:
case 2257:
case 1438:
case 2085:
case 2634:
case 3377:
case 2340:
case 4053:
case 2985:
case 452:
case 422:
case 408:
case 2194:
case 370:
case 3012:
case 2488:
case 3482:
case 441:
case 810:
case 1377:
case 846:
case 1912:
case 996:
case 2432:
case 558:
case 3977:
case 485:
case 1267:
case 1567:
case 1335:
case 1299:
case 1599:
case 747:
case 3615:
case 438:
case 3434:
case 2040:
case 3626:
case 616:
case 4019:
case 640:
case 1400:
case 1688:
case 2014:
case 1077:
case 1772:
case 2643:
case 280:
case 2303:
case 1874:
case 1657:
case 311:
case 1141:
case 3881:
case 1616:
case 1322:
case 2571:
case 3467:
case 3499:
case 3336:
case 1534:
case 796:
case 2361:
case 897:
case 2003:
case 2515:
case 309:
case 1936:
case 2425:
case 1538:
case 2457:
case 2139:
case 3051:
case 1443:
case 1727:
case 1282:
case 1878:
case 3866:
case 2739:
case 397:
case 3898:
case 3345:
case 3980:
case 809:
case 126:
case 156:
case 2308:
case 4009:
case 2930:
case 641:
case 1520:
case 608:
case 107:
case 729:
case 3002:
case 371:
case 2610:
case 839:
case 3045:
case 440:
case 517:
case 2644:
case 3894:
case 1873:
case 1902:
case 1448:
case 685:
case 3839:
case 3097:
case 676:
case 1760:
case 3792:
case 1172:
case 3248:
case 2542:
case 3279:
case 1969:
case 1046:
case 2889:
case 1997:
case 3433:
case 590:
case 3369:
case 929:
case 3210:
case 3397:
case 3420:
case 784:
case 3117:
case 1606:
case 310:
case 3131:
case 2059:
case 2193:
case 4054:
case 1346:
case 3544:
case 4062:
case 642:
case 1420:
case 718:
case 2959:
case 530:
case 1369:
case 23:
case 621:
case 651:
case 2773:
case 3346:
case 2750:
case 4090:
case 1244:
case 3606:
case 3683:
case 1131:
case 20:
case 2178:
case 1946:
case 812:
case 500:
case 1839:
case 3760:
case 1792:
case 450:
case 420:
case 2913:
case 1579:
case 1279:
case 749:
case 3969:
case 2620:
case 2591:
case 2291:
case 918:
case 2330:
case 1002:
case 1707:
case 2908:
case 3873:
case 2023:
case 2583:
case 2283:
case 2442:
case 2506:
case 2405:
case 3945:
case 3380:
case 2165:
case 1302:
case 2030:
case 3444:
case 1642:
case 2860:
case 1345:
case 326:
case 899:
case 282:
case 3080:
case 2323:
case 1789:
case 3079:
case 3190:
case 1948:
case 1546:
case 1402:
case 178:
case 677:
case 1770:
case 2513:
case 2213:
case 770:
case 490:
case 663:
case 1630:
case 3297:
case 3310:
case 939:
case 2423:
case 3048:
case 1979:
case 2042:
case 2559:
case 2259:
case 1910:
case 691:
case 2430:
case 1944:
case 909:
case 3010:
case 3480:
case 2602:
case 347:
case 628:
case 658:
case 1020:
case 2669:
case 1333:
case 16:
case 970:
case 1187:
case 1801:
case 3613:
case 540:
case 2991:
case 516:
case 1497:
case 24:
case 1469:
case 3659:
case 2906:
case 295:
case 1863:
case 3502:
case 2208:
case 2508:
case 136:
case 1033:
case 3245:
case 3545:
case 799:
case 1659:
case 2223:
case 2006:
case 205:
case 2413:
case 3320:
case 336:
case 1545:
case 1245:
case 912:
case 1502:
case 288:
case 2111:
case 2646:
case 3020:
case 3896:
case 327:
case 2870:
case 235:
case 2383:
case 2230:
case 3187:
case 1847:
case 383:
case 3801:
case 692:
case 1920:
case 306:
case 464:
case 430:
case 1608:
case 2152:
case 3719:
case 3158:
case 147:
case 1348:
case 3445:
case 400:
case 4056:
case 4031:
case 4017:
case 1344:
case 267:
case 619:
case 2168:
case 3546:
case 2680:
case 3246:
case 2408:
case 1310:
case 22:
case 25:
case 2701:
case 818:
case 3630:
case 760:
case 673:
case 65:
case 62:
case 3869:
case 2647:
case 3039:
case 2151:
case 2419:
case 3103:
case 2089:
case 3704:
case 3186:
case 2229:
case 1653:
case 3463:
case 4084:
case 2470:
case 3496:
case 248:
case 3708:
case 1619:
case 3595:
case 1124:
case 1723:
case 2389:
case 2859:
case 123:
case 3547:
case 3247:
case 17:
case 960:
case 292:
case 4016:
case 2797:
case 934:
case 3114:
case 1596:
case 1296:
case 3629:
case 688:
case 2960:
case 1998:
case 1373:
case 2804:
case 635:
case 1350:
case 1495:
case 2695:
case 904:
case 3398:
case 1185:
case 3845:
case 2392:
case 1994:
case 3973:
case 2808:
case 3950:
case 413:
case 1050:
case 3759:
case 2112:
case 3118:
case 1973:
case 2429:
case 1802:
case 1950:
case 695:
case 2360:
case 2219:
case 232:
case 994:
case 1759:
case 2135:
case 64:
case 2060:
case 3201:
case 353:
case 2830:
case 1547:
case 915:
case 2177:
case 2570:
case 81:
case 3296:
case 3596:
case 3880:
case 3998:
case 1394:
case 1595:
case 1496:
case 143:
case 3723:
case 3447:
case 1161:
case 2907:
case 4015:
case 580:
case 2601:
case 4071:
case 3128:
case 2989:
case 1869:
case 1704:
case 3653:
case 2696:
case 1463:
case 3670:
case 277:
case 2780:
case 1820:
case 682:
case 2779:
case 1001:
case 3742:
case 2639:
case 2748:
case 2292:
case 186:
case 3298:
case 3705:
case 1550:
case 655:
case 513:
case 1250:
case 1573:
case 3594:
case 2919:
case 1396:
case 924:
case 1157:
case 1125:
case 1641:
case 3607:
case 1301:
case 133:
case 3115:
case 4024:
case 804:
case 2842:
case 3395:
case 3848:
case 60:
case 3473:
case 1494:
case 3539:
case 2805:
case 3844:
case 1184:
case 1498:
case 1791:
case 860:
case 2207:
case 3810:
case 221:
case 834:
case 3171:
case 2673:
case 2650:
case 1844:
case 91:
case 4086:
case 681:
case 2241:
case 1095:
case 3791:
case 815:
case 362:
case 7:
case 1879:
case 944:
case 3494:
case 1539:
case 3660:
case 1692:
case 238:
case 2353:
case 3396:
case 285:
case 1963:
case 2883:
case 3250:
case 71:
case 3273:
case 2891:
case 569:
case 3157:
case 3833:
case 161:
case 3641:
case 1607:
case 241:
case 3947:
case 1901:
case 193:
case 9:
case 4018:
case 2070:
case 1689:
case 2053:
case 744:
case 386:
case 2260:
case 1996:
case 1742:
case 3655:
case 3627:
case 1105:
case 2358:
case 1266:
case 1321:
case 2272:
case 3364:
case 3882:
case 2990:
case 2888:
case 3068:
case 2767:
case 886:
case 3838:
case 3064:
case 1021:
case 1581:
case 2058:
case 3725:
case 3834:
case 3052:
case 1800:
case 1952:
case 2354:
case 1593:
case 1293:
case 3574:
case 2665:
case 2884:
case 1376:
case 2431:
case 216:
case 1911:
case 394:
case 3672:
case 1937:
case 54:
case 1474:
case 4008:
case 2782:
case 3788:
case 2555:
case 2087:
case 2255:
case 3867:
case 1726:
case 3037:
case 2120:
case 2649:
case 3732:
case 3011:
case 3899:
case 2387:
case 1449:
case 2133:
case 2825:
case 2857:
case 875:
case 987:
case 3075:
case 1975:
case 923:
case 953:
case 3466:
case 2009:
case 3784:
case 3106:
case 315:
case 3183:
case 1656:
case 1843:
case 588:
case 2681:
case 1075:
case 4030:
case 1466:
case 2472:
case 3617:
case 115:
case 360:
case 1183:
case 3631:
case 482:
case 1311:
case 334:
case 1565:
case 743:
case 505:
case 1788:
case 194:
case 3911:
case 1672:
case 1493:
case 2666:
case 1037:
case 304:
case 425:
case 455:
case 1834:
case 2871:
case 3021:
case 1921:
case 55:
case 1274:
case 1574:
case 3964:
case 2144:
case 861:
case 2256:
case 250:
case 220:
case 2531:
case 2556:
case 3800:
case 3952:
case 2958:
case 943:
case 3321:
case 3266:
case 1578:
case 43:
case 1364:
case 2962:
case 1976:
case 3968:
case 2148:
case 1627:
case 1068:
case 2090:
case 2815:
case 1549:
case 1703:
case 44:
case 3654:
case 1104:
case 3537:
case 2180:
case 124:
case 154:
case 3511:
case 1690:
case 2668:
case 495:
case 775:
case 2587:
case 3728:
case 2287:
case 2027:
case 3065:
case 903:
case 2209:
case 2509:
case 3123:
case 3835:
case 3476:
case 3:
case 3658:
case 762:
case 2885:
case 3275:
case 3575:
case 3268:
case 733:
case 1276:
case 1576:
case 2262:
case 1978:
case 581:
case 2611:
case 2637:
case 3966:
case 1740:
case 2254:
case 1475:
case 87:
case 3687:
case 1714:
case 975:
case 3822:
case 1159:
case 3609:
case 1718:
case 1093:
case 3349:
case 2735:
case 545:
case 962:
case 3564:
case 3264:
case 2675:
case 3378:
case 1081:
case 1521:
case 59:
case 1366:
case 2258:
case 3552:
case 1411:
case 3252:
case 2917:
case 290:
case 1981:
case 50:
case 467:
case 2056:
case 3159:
case 3718:
case 144:
case 3411:
case 1252:
case 1552:
case 793:
case 1378:
case 42:
case 3221:
case 3740:
case 3393:
case 761:
case 2317:
case 2356:
case 2290:
case 2590:
case 3276:
case 3978:
case 2886:
case 1049:
case 2169:
case 3381:
case 1822:
case 2409:
case 3851:
case 1687:
case 2197:
case 435:
case 1835:
case 1123:
case 2818:
case 488:
case 1575:
case 1275:
case 1:
case 2102:
case 1658:
case 1537:
case 2458:
case 3452:
case 324:
case 3690:
case 2955:
case 2927:
case 4083:
case 279:
case 1654:
case 525:
case 4091:
case 2814:
case 1040:
case 604:
case 2299:
case 3914:
case 1318:
case 2567:
case 2632:
case 2772:
case 1766:
case 3827:
case 1484:
case 2400:
case 3682:
case 2688:
case 1014:
case 3940:
case 3150:
case 1488:
case 2035:
case 773:
case 660:
case 493:
case 2684:
case 83:
case 2865:
case 634:
case 1793:
case 1432:
case 3525:
case 3557:
case 3085:
case 3257:
case 988:
case 1314:
case 767:
case 1781:
case 935:
case 3415:
case 3532:
case 3232:
case 1457:
case 2538:
case 2936:
case 1928:
case 3699:
case 1526:
case 1361:
case 1086:
case 1003:
case 3903:
case 2878:
case 3872:
case 2443:
case 543:
case 3028:
case 3588:
case 2727:
case 3288:
case 2022:
case 882:
case 1139:
case 1303:
case 2874:
case 3284:
case 3584:
case 1643:
case 1831:
case 2234:
case 2322:
case 1924:
case 1571:
case 3328:
case 2657:
case 2625:
case 2141:
case 3856:
case 3643:
case 3061:
case 1024:
case 1584:
case 3924:
case 3571:
case 3271:
case 1328:
case 2881:
case 568:
case 2107:
case 2499:
case 2336:
case 2922:
case 1324:
case 475:
case 3928:
case 1699:
case 3226:
case 3086:
case 3003:
case 3515:
case 3215:
case 1232:
case 3416:
case 1532:
case 3425:
case 3457:
case 1667:
case 3139:
case 1903:
case 2866:
case 74:
case 1986:
case 1872:
case 2717:
case 270:
case 2731:
case 3340:
case 3985:
case 3793:
case 1774:
case 57:
case 2243:
case 553:
case 2543:
case 3488:
case 2482:
case 4001:
case 403:
case 1426:
case 1634:
case 486:
case 1516:
case 3432:
case 2438:
case 1471:
case 1638:
case 1749:
case 2615:
case 845:
case 2626:
case 1914:
case 1682:
case 3014:
case 1778:
case 94:
case 1855:
case 433:
case 2787:
case 2082:
case 2522:
case 835:
case 1932:
case 3677:
case 3854:
case 3711:
case 174:
case 3737:
case 3384:
case 3862:
case 1988:
case 2868:
case 1586:
case 1286:
case 1503:
case 1203:
case 3440:
case 4039:
case 3775:
case 2900:
case 2382:
case 1984:
case 1071:
case 2864:
case 2685:
case 1261:
case 3084:
case 2709:
case 3524:
case 3414:
case 3332:
case 2277:
case 2577:
case 925:
case 3461:
case 3887:
case 313:
case 3622:
case 2628:
case 3325:
case 3316:
case 4094:
case 2811:
case 561:
case 218:
case 873:
case 2754:
case 1540:
case 2153:
case 624:
case 3196:
case 2099:
case 85:
case 82:
case 169:
case 2170:
case 2762:
case 2119:
case 3585:
case 3025:
case 3764:
case 249:
case 3486:
case 3403:
case 70:
case 1218:
case 2399:
case 1957:
case 423:
case 453:
case 1764:
case 1163:
case 1486:
case 79:
case 47:
case 1403:
case 1016:
case 1752:
case 1057:
case 1025:
case 3518:
case 487:
case 2661:
case 3925:
case 3916:
case 745:
case 3428:
case 503:
case 2422:
case 1809:
case 1622:
case 3214:
case 3514:
case 2999:
case 1316:
case 1461:
case 2967:
case 3776:
case 2790:
case 2343:
case 533:
case 4073:
case 781:
case 284:
case 1388:
case 3195:
case 562:
case 1858:
case 1332:
case 2934:
case 3315:
case 3561:
case 3261:
case 3612:
case 1971:
case 1524:
case 1224:
case 1418:
case 2251:
case 2536:
case 3932:
case 1915:
case 1926:
case 2435:
case 1528:
case 2614:
case 3371:
case 2982:
case 229:
case 2876:
case 981:
case 3988:
case 3890:
case 3286:
case 3015:
case 3203:
case 374:
case 3485:
case 2729:
case 3204:
case 1306:
case 687:
case 1870:
case 188:
case 1646:
case 1853:
case 780:
case 1391:
case 653:
case 515:
case 2613:
case 3697:
case 1223:
case 1006:
case 34:
case 2202:
case 3208:
case 395:
case 3906:
case 3795:
case 1175:
case 1680:
case 4074:
case 1408:
case 2079:
case 2190:
case 1168:
case 1796:
case 2597:
case 3213:
case 3513:
case 3747:
case 2048:
case 1701:
case 3042:
case 869:
case 2310:
case 15:
case 2569:
case 2269:
case 3259:
case 2379:
case 4049:
case 3645:
case 3121:
case 41:
case 1164:
case 3342:
case 3305:
case 1152:
case 2480:
case 643:
case 489:
case 1559:
case 1259:
case 2623:
case 3152:
case 2719:
case 1602:
case 1121:
case 4066:
case 1645:
case 3404:
case 3164:
case 2770:
case 3905:
case 2154:
case 2445:
case 2753:
case 2246:
case 2546:
case 2402:
case 3408:
case 2162:
case 2948:
case 2979:
case 35:
case 1213:
case 3523:
case 14:
case 2469:
case 454:
case 3413:
case 1991:
case 3175:
case 3819:
case 504:
case 2033:
case 1508:
case 195:
case 1983:
case 1795:
case 227:
case 2896:
case 257:
case 114:
case 388:
case 2280:
case 3646:
case 2580:
case 2020:
case 3137:
case 1504:
case 3383:
case 3230:
case 3530:
case 560:
case 283:
case 534:
case 2333:
case 3505:
case 2839:
case 2248:
case 3483:
case 3242:
case 4064:
case 166:
case 1178:
case 2069:
case 2946:
case 3889:
case 1149:
case 3491:
case 1633:
case 1841:
case 3807:
case 13:
case 2210:
case 1959:
case 2397:
case 246:
case 2156:
case 3059:
case 1773:
case 1174:
case 686:
case 2980:
case 3892:
case 4075:
case 2642:
case 3739:
case 297:
case 3648:
case 603:
case 1904:
case 1323:
case 3930:
case 3679:
case 2002:
case 880:
case 633:
case 1591:
case 1165:
case 4011:
case 2894:
case 1405:
case 1023:
case 1583:
case 1283:
case 125:
case 1206:
case 3291:
case 3591:
case 1610:
case 661:
case 524:
case 554:
case 1008:
case 2479:
case 3330:
case 3023:
case 3283:
case 3583:
case 3506:
case 3442:
case 2873:
case 1304:
case 913:
case 3405:
case 237:
case 2155:
case 3904:
case 256:
case 382:
case 2520:
case 2080:
case 1004:
case 1930:
case 460:
case 1313:
case 33:
case 713:
case 4076:
case 1794:
case 2606:
case 145:
case 1542:
case 3178:
case 30:
case 366:
case 4021:
case 1205:
case 1505:
case 1013:
case 1491:
case 1359:
case 3913:
case 2997:
case 2969:
case 2046:
case 3149:
case 19:
case 1138:
case 672:
case 2879:
case 2115:
case 3029:
case 3589:
case 3289:
case 3698:
case 2848:
case 176:
case 3329:
case 2844:
case 1650:
case 1673:
case 3460:
case 1733:
case 1134:
case 930:
case 342:
case 964:
case 2095:
case 2171:
case 2810:
case 321:
case 351:
case 108:
case 152:
case 1070:
case 1199:
case 4035:
case 1167:
case 549:
case 2901:
case 293:
case 1407:
case 141:
case 3441:
case 2742:
case 2047:
case 700:
case 3592:
case 1319:
case 2298:
case 656:
case 626:
case 1806:
case 185:
case 3143:
case 637:
case 2594:
case 2294:
case 3919:
case 1353:
case 518:
case 730:
case 4077:
case 979:
case 1489:
case 3370:
case 338:
case 1919:
case 3353:
case 385:
case 1744:
case 2550:
case 1143:
case 3883:
case 2063:
case 2301:
case 1710:
case 2125:
case 2833:
case 584:
case 2116:
case 3891:
case 2947:
case 3167:
case 2820:
case 3070:
case 790:
case 4012:
case 2096:
case 470:
case 1970:
case 697:
case 1592:
case 198:
case 1292:
case 3319:
case 3260:
case 3560:
case 1953:
case 2363:
case 1748:
case 2498:
case 646:
case 409:
case 2706:
case 275:
case 529:
case 1507:
case 151:
case 3241:
case 142:
case 4051:
case 439:
case 840:
case 1029:
case 1289:
case 3720:
case 2132:
case 376:
case 2660:
case 3182:
case 2188:
case 3769:
case 1177:
case 683:
case 2547:
case 3092:
case 2098:
case 2140:
case 102:
case 128:
case 1570:
case 1746:
case 3804:
case 2845:
case 1360:
case 3392:
case 2973:
case 3808:
case 4067:
case 1823:
case 2759:
case 2118:
case 132:
case 2094:
case 418:
case 1989:
case 2869:
case 1341:
case 331:
case 18:
case 3307:
case 2039:
case 3136:
case 163:
case 3813:
case 4034:
case 2897:
case 1780:
case 3419:
case 177:
case 1696:
case 2186:
case 3745:
case 3470:
case 1663:
case 2295:
case 4082:
case 3007:
case 3702:
case 301:
case 191:
case 3941:
case 243:
case 2401:
case 599:
case 3859:
case 4038:
case 1702:
case 1745:
case 647:
case 1470:
case 716:
case 391:
case 2124:
case 429:
case 1647:
case 1136:
case 3601:
case 1813:
case 3989:
case 817:
case 38:
case 1307:
case 539:
case 2128:
case 3696:
case 119:
case 2653:
case 2846:
case 3780:
case 4000:
case 377:
case 2939:
case 2185:
case 1392:
case 1695:
case 916:
case 1112:
case 484:
case 890:
case 3135:
case 570:
case 192:
case 1092:
case 3060:
case 3177:
case 2201:
case 3830:
case 4043:
case 2495:
case 3746:
case 1804:
case 3253:
case 1960:
case 696:
case 302:
case 328:
case 3992:
case 2296:
case 3611:
case 1803:
case 1886:
case 1972:
case 3637:
case 2966:
case 629:
case 1590:
case 659:
case 3562:
case 1356:
case 3554:
case 3254:
case 546:
case 1197:
case 510:
case 828:
case 1409:
case 2822:
case 802:
case 3072:
case 3777:
case 4010:
case 1031:
case 1712:
case 976:
case 2609:
case 4079:
case 3824:
case 2074:
case 1861:
case 741:
case 2264:
case 832:
case 2564:
case 3917:
case 3931:
case 3956:
case 390:
case 3258:
case 752:
case 3558:
case 2993:
case 2252:
case 244:
case 2552:
case 571:
case 179:
case 2662:
case 2537:
case 684:
case 2511:
case 2211:
case 1814:
case 1751:
case 1736:
case 3587:
case 3055:
case 2728:
case 985:
case 2877:
case 776:
case 2724:
case 3209:
case 2835:
case 3652:
case 2:
case 1102:
case 3355:
case 3490:
case 952:
case 922:
case 908:
case 1621:
case 848:
case 1509:
case 526:
case 4020:
case 2812:
case 998:
case 507:
case 3621:
case 46:
case 1652:
case 649:
case 483:
case 3462:
case 117:
case 2690:
case 831:
case 3458:
case 1180:
case 3840:
case 2452:
case 2703:
case 721:
case 751:
case 2786:
case 3955:
case 379:
case 819:
case 3736:
case 537:
case 1735:
case 3861:
case 478:
case 798:
case 3031:
case 3056:
case 300:
case 2159:
case 3017:
case 2718:
case 1917:
case 2437:
case 1372:
case 2221:
case 1675:
case 3317:
case 2475:
case 3331:
case 3356:
case 330:
case 942:
case 2978:
case 1146:
case 3590:
case 2276:
case 1262:
case 951:
case 1562:
case 1828:
case 3169:
case 2066:
case 3197:
case 565:
case 2714:
case 316:
case 340:
case 932:
case 3431:
case 3417:
case 3782:
case 3227:
case 3527:
case 471:
case 4002:
case 791:
case 2481:
case 2867:
case 1987:
case 3309:
case 876:
case 3738:
case 3120:
case 2037:
case 2011:
case 3387:
case 958:
case 928:
case 902:
case 497:
case 3133:
case 3857:
case 3734:
case 3816:
case 2565:
case 3674:
case 2106:
case 1472:
case 1954:
case 841:
case 991:
case 1962:
case 2882:
case 808:
case 3990:
case 2549:
case 1826:
case 2249:
case 2068:
case 609:
case 1090:
case 3767:
case 3062:
case 1179:
case 3054:
case 611:
case 1871:
case 758:
case 2725:
case 702:
case 885:
case 977:
case 2052:
case 2834:
case 3354:
case 1958:
case 150:
case 120:
case 1556:
case 1144:
case 3884:
case 639:
case 98:
case 1455:
case 1743:
case 3665:
case 578:
case 3110:
case 2021:
case 2581:
case 3871:
case 931:
case 3144:
case 2376:
case 3390:
case 3743:
case 3455:
case 4046:
case 472:
case 2952:
case 1354:
case 2593:
case 3958:
case 3531:
case 3231:
case 2800:
case 3517:
case 2968:
case 1990:
case 1888:
case 3954:
case 1358:
case 948:
case 1799:
case 3815:
case 3826:
case 1767:
case 901:
case 527:
case 1825:
case 426:
case 456:
case 1816:
case 719:
case 1387:
case 842:
case 2617:
case 1009:
case 2656:
case 260:
case 583:
case 2478:
case 234:
case 4080:
case 56:
case 506:
case 992:
case 821:
case 407:
case 3700:
case 2975:
case 1782:
case 1255:
case 116:
case 1678:
case 3666:
case 2937:
case 1456:
case 140:
case 748:
case 612:
case 536:
case 1649:
case 204:
case 701:
case 2715:
case 2726:
case 3987:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748829601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,];
var gg_b = "1748829601/";

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
