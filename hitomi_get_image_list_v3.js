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
case 2625:
case 3693:
case 752:
case 3520:
case 3072:
case 485:
case 252:
case 3469:
case 918:
case 2301:
case 2773:
case 206:
case 585:
case 863:
case 3060:
case 3141:
case 706:
case 266:
case 3384:
case 803:
case 2108:
case 2565:
case 3966:
case 1222:
case 766:
case 3405:
case 2792:
case 2025:
case 586:
case 3348:
case 205:
case 3093:
case 3050:
case 3802:
case 2917:
case 2243:
case 2241:
case 693:
case 1285:
case 413:
case 1752:
case 2433:
case 2017:
case 3656:
case 795:
case 3950:
case 974:
case 3991:
case 1939:
case 2082:
case 2925:
case 2617:
case 169:
case 671:
case 1300:
case 3972:
case 1762:
case 3960:
case 3894:
case 1719:
case 1436:
case 114:
case 296:
case 1207:
case 3376:
case 1872:
case 1784:
case 2532:
case 2380:
case 2896:
case 3928:
case 2131:
case 1860:
case 3747:
case 83:
case 1475:
case 2177:
case 3706:
case 2212:
case 2654:
case 1136:
case 2259:
case 1893:
case 1891:
case 151:
case 2597:
case 3700:
case 530:
case 3112:
case 3277:
case 4063:
case 3443:
case 1694:
case 3441:
case 1188:
case 1866:
case 3233:
case 3231:
case 3628:
case 237:
case 3169:
case 2964:
case 3511:
case 737:
case 389:
case 829:
case 3319:
case 1902:
case 1383:
case 4053:
case 1027:
case 4018:
case 2345:
case 1915:
case 4090:
case 3352:
case 3159:
case 3105:
case 1130:
case 2863:
case 3568:
case 1567:
case 734:
case 1826:
case 3322:
case 191:
case 3340:
case 574:
case 3058:
case 4023:
case 1057:
case 1284:
case 3013:
case 913:
case 3011:
case 3206:
case 3129:
case 3668:
case 3473:
case 3492:
case 3334:
case 2759:
case 608:
case 1067:
case 3895:
case 1089:
case 1527:
case 2821:
case 3528:
case 3658:
case 2375:
case 3814:
case 2147:
case 1799:
case 2229:
case 418:
case 720:
case 3200:
case 2481:
case 2106:
case 1515:
case 527:
case 1308:
case 2697:
case 679:
case 161:
case 1989:
case 1842:
case 1820:
case 2564:
case 3913:
case 3911:
case 1502:
case 101:
case 2097:
case 3385:
case 1486:
case 1103:
case 3857:
case 1811:
case 1813:
case 159:
case 2582:
case 2330:
case 4016:
case 930:
case 3566:
case 1145:
case 2273:
case 2271:
case 1186:
case 1722:
case 1868:
case 1740:
case 117:
case 1401:
case 1403:
case 292:
case 2816:
case 3556:
case 2955:
case 2388:
case 3626:
case 18:
case 3889:
case 1095:
case 1252:
case 3171:
case 3560:
case 2743:
case 3283:
case 3042:
case 1995:
case 2336:
case 4079:
case 943:
case 2055:
case 3572:
case 924:
case 2009:
case 1331:
case 1333:
case 3591:
case 3926:
case 821:
case 1262:
case 1377:
case 2609:
case 755:
case 3378:
case 853:
case 3708:
case 1707:
case 1746:
case 3415:
case 2368:
case 3869:
case 3296:
case 2034:
case 2153:
case 319:
case 126:
case 3075:
case 57:
case 364:
case 2622:
case 2640:
case 2313:
case 3675:
case 3859:
case 2570:
case 446:
case 304:
case 2040:
case 2985:
case 2161:
case 1830:
case 2163:
case 2022:
case 2562:
case 2239:
case 1225:
case 3721:
case 3723:
case 3402:
case 1504:
case 2449:
case 1156:
case 1160:
case 1043:
case 3538:
case 2877:
case 1573:
case 3324:
case 2196:
case 1282:
case 2934:
case 3427:
case 1428:
case 1150:
case 1193:
case 1643:
case 3494:
case 1592:
case 3580:
case 758:
case 3332:
case 3263:
case 4077:
case 3261:
case 2685:
case 3975:
case 4031:
case 2576:
case 3044:
case 665:
case 939:
case 2757:
case 852:
case 865:
case 652:
case 3574:
case 1254:
case 150:
case 1087:
case 3088:
case 1460:
case 1605:
case 1875:
case 1012:
case 1687:
case 3030:
case 3688:
case 703:
case 2326:
case 184:
case 203:
case 3194:
case 1005:
case 2978:
case 1059:
case 2202:
case 1491:
case 1493:
case 3439:
case 3716:
case 805:
case 2789:
case 515:
case 1959:
case 4008:
case 2099:
case 793:
case 92:
case 2418:
case 3365:
case 2453:
case 349:
case 895:
case 1732:
case 2584:
case 695:
case 1797:
case 3798:
case 1456:
case 2227:
case 1969:
case 516:
case 3944:
case 3102:
case 3710:
case 896:
case 2678:
case 332:
case 3355:
case 3503:
case 2699:
case 2320:
case 416:
case 3036:
case 2715:
case 3871:
case 3873:
case 2578:
case 335:
case 1838:
case 2599:
case 3325:
case 3837:
case 3003:
case 3892:
case 1929:
case 2267:
case 3536:
case 190:
case 2289:
case 2198:
case 692:
case 3749:
case 311:
case 2702:
case 3495:
case 2423:
case 2421:
case 892:
case 3216:
case 336:
case 1764:
case 97:
case 2035:
case 656:
case 856:
case 3901:
case 3903:
case 2356:
case 802:
case 1442:
case 1420:
case 1158:
case 3074:
case 1361:
case 1363:
case 1569:
case 602:
case 2116:
case 2984:
case 655:
case 3210:
case 3279:
case 11:
case 221:
case 1297:
case 2727:
case 855:
case 3298:
case 3530:
case 187:
case 1886:
case 3167:
case 2948:
case 3317:
case 4083:
case 1351:
case 4081:
case 1505:
case 1353:
case 42:
case 3457:
case 2962:
case 1413:
case 1411:
case 634:
case 3796:
case 1904:
case 1142:
case 397:
case 2585:
case 3986:
case 1349:
case 1037:
case 488:
case 3038:
case 3680:
case 1692:
case 176:
case 268:
case 1073:
case 1071:
case 2970:
case 52:
case 3638:
case 3080:
case 2546:
case 1673:
case 2507:
case 1671:
case 2076:
case 1803:
case 1801:
case 3489:
case 916:
case 3223:
case 3221:
case 2295:
case 2052:
case 2670:
case 2619:
case 3575:
case 2976:
case 820:
case 367:
case 2328:
case 1604:
case 1874:
case 539:
case 2662:
case 1717:
case 279:
case 983:
case 2479:
case 3195:
case 2123:
case 2498:
case 341:
case 2652:
case 3761:
case 307:
case 1937:
case 3383:
case 815:
case 3027:
case 2516:
case 615:
case 3915:
case 595:
case 934:
case 1159:
case 2446:
case 213:
case 1105:
case 1568:
case 713:
case 3567:
case 3278:
case 1700:
case 1277:
case 1441:
case 3694:
case 1362:
case 831:
case 1233:
case 1628:
case 2774:
case 2882:
case 1169:
case 596:
case 189:
case 1558:
case 3136:
case 2230:
case 2701:
case 883:
case 2440:
case 2510:
case 3850:
case 3615:
case 2371:
case 2373:
case 3891:
case 2598:
case 506:
case 920:
case 1839:
case 351:
case 2049:
case 4025:
case 3602:
case 2244:
case 3784:
case 566:
case 3748:
case 2288:
case 2199:
case 3994:
case 286:
case 2178:
case 437:
case 2653:
case 1056:
case 730:
case 570:
case 2618:
case 3300:
case 1335:
case 1827:
case 3595:
case 3828:
case 2521:
case 3246:
case 1960:
case 2140:
case 2061:
case 1666:
case 2122:
case 537:
case 3436:
case 314:
case 3770:
case 1894:
case 1066:
case 2661:
case 1781:
case 3752:
case 2499:
case 2134:
case 1656:
case 2053:
case 2051:
case 2018:
case 2090:
case 1526:
case 743:
case 2107:
case 4054:
case 3430:
case 1459:
case 3240:
case 1660:
case 2780:
case 2146:
case 645:
case 2990:
case 1091:
case 1093:
case 1348:
case 1050:
case 2918:
case 2953:
case 2951:
case 67:
case 3639:
case 1542:
case 1693:
case 4064:
case 1650:
case 1072:
case 1487:
case 2185:
case 955:
case 3514:
case 846:
case 2738:
case 1141:
case 1143:
case 1591:
case 1593:
case 1620:
case 1926:
case 3377:
case 1708:
case 839:
case 3219:
case 3180:
case 3746:
case 639:
case 965:
case 3252:
case 140:
case 1173:
case 2245:
case 3785:
case 1283:
case 905:
case 3014:
case 1137:
case 1020:
case 842:
case 2923:
case 2921:
case 966:
case 1572:
case 3474:
case 995:
case 3868:
case 534:
case 2561:
case 1867:
case 3403:
case 2280:
case 3276:
case 888:
case 2312:
case 62:
case 434:
case 2162:
case 2023:
case 1104:
case 1942:
case 2387:
case 3813:
case 133:
case 2553:
case 3858:
case 2621:
case 3695:
case 2238:
case 3145:
case 1911:
case 3957:
case 1404:
case 3502:
case 1958:
case 2079:
case 1385:
case 301:
case 2549:
case 2098:
case 4009:
case 556:
case 2341:
case 2343:
case 2419:
case 456:
case 3486:
case 347:
case 3103:
case 3101:
case 1814:
case 3967:
case 2452:
case 1731:
case 562:
case 1200:
case 555:
case 4065:
case 1307:
case 282:
case 2916:
case 455:
case 3515:
case 2610:
case 19:
case 361:
case 3820:
case 2698:
case 462:
case 3842:
case 1346:
case 748:
case 373:
case 1334:
case 1492:
case 3480:
case 2201:
case 1068:
case 1895:
case 3089:
case 10:
case 970:
case 1528:
case 1658:
case 2016:
case 3657:
case 1611:
case 2998:
case 492:
case 1322:
case 3826:
case 2744:
case 2910:
case 2979:
case 1013:
case 2616:
case 1206:
case 1437:
case 592:
case 2135:
case 1129:
case 1473:
case 2788:
case 2228:
case 429:
case 1798:
case 2164:
case 630:
case 1779:
case 3:
case 1309:
case 132:
case 3724:
case 2807:
case 1501:
case 1503:
case 1355:
case 877:
case 1988:
case 3987:
case 1036:
case 3466:
case 2506:
case 2885:
case 1930:
case 1843:
case 2033:
case 458:
case 1636:
case 2154:
case 4007:
case 1365:
case 3732:
case 558:
case 2482:
case 2933:
case 3687:
case 1030:
case 624:
case 1688:
case 2768:
case 2977:
case 824:
case 3612:
case 77:
case 245:
case 1644:
case 3493:
case 53:
case 3264:
case 1127:
case 1249:
case 27:
case 2758:
case 1044:
case 2834:
case 2711:
case 2713:
case 3254:
case 3321:
case 3323:
case 246:
case 3460:
case 3605:
case 3012:
case 968:
case 2256:
case 3193:
case 1139:
case 2125:
case 1332:
case 3592:
case 1494:
case 3641:
case 1263:
case 3765:
case 3160:
case 3043:
case 231:
case 3537:
case 571:
case 3379:
case 3310:
case 194:
case 3573:
case 216:
case 471:
case 908:
case 3755:
case 3709:
case 2742:
case 1290:
case 2357:
case 979:
case 1859:
case 1805:
case 104:
case 783:
case 1586:
case 157:
case 3830:
case 3941:
case 1721:
case 3225:
case 1723:
case 2464:
case 885:
case 2250:
case 3156:
case 2182:
case 503:
case 1415:
case 2367:
case 2272:
case 2117:
case 2454:
case 2581:
case 2583:
case 1887:
case 2389:
case 1545:
case 1195:
case 2756:
case 2497:
case 3973:
case 3971:
case 4035:
case 2424:
case 1761:
case 3265:
case 1829:
case 180:
case 2835:
case 3992:
case 2081:
case 2766:
case 1686:
case 453:
case 682:
case 2220:
case 553:
case 3874:
case 1751:
case 3717:
case 882:
case 2981:
case 2983:
case 2165:
case 1638:
case 2315:
case 4048:
case 3468:
case 929:
case 34:
case 2750:
case 1489:
case 1221:
case 2793:
case 2884:
case 212:
case 958:
case 3413:
case 1457:
case 3120:
case 1986:
case 1114:
case 3037:
case 2848:
case 3543:
case 3541:
case 1680:
case 376:
case 1364:
case 1210:
case 1279:
case 3297:
case 479:
case 2862:
case 1298:
case 1189:
case 598:
case 1382:
case 2947:
case 579:
case 827:
case 387:
case 1167:
case 498:
case 3559:
case 3224:
case 3318:
case 2600:
case 2465:
case 2906:
case 4019:
case 300:
case 3845:
case 2000:
case 3512:
case 1414:
case 2852:
case 1903:
case 3111:
case 3420:
case 3442:
case 1544:
case 4062:
case 242:
case 3361:
case 2455:
case 2606:
case 1003:
case 2876:
case 288:
case 2124:
case 1536:
case 3880:
case 3396:
case 1892:
case 2647:
case 1749:
case 2197:
case 993:
case 2132:
case 2258:
case 2006:
case 1871:
case 1873:
case 3838:
case 971:
case 2531:
case 408:
case 3754:
case 135:
case 2339:
case 2047:
case 1325:
case 2088:
case 2630:
case 525:
case 363:
case 1713:
case 3757:
case 3496:
case 987:
case 2439:
case 145:
case 2249:
case 17:
case 526:
case 3789:
case 2127:
case 1768:
case 3767:
case 426:
case 303:
case 1977:
case 3451:
case 1417:
case 2115:
case 1506:
case 393:
case 3078:
case 2636:
case 1154:
case 2841:
case 1033:
case 1885:
case 2930:
case 2355:
case 2503:
case 3808:
case 0:
case 4043:
case 732:
case 3699:
case 3227:
case 2798:
case 1228:
case 371:
case 3149:
case 2944:
case 264:
case 3552:
case 2812:
case 2075:
case 3907:
case 2545:
case 1389:
case 33:
case 3622:
case 4005:
case 1581:
case 2869:
case 2296:
case 719:
case 2415:
case 3368:
case 1726:
case 3190:
case 1182:
case 3034:
case 3118:
case 3795:
case 2402:
case 3239:
case 1464:
case 2723:
case 4069:
case 3449:
case 3519:
case 3570:
case 2805:
case 922:
case 3313:
case 4087:
case 1357:
case 4012:
case 3040:
case 3163:
case 257:
case 704:
case 3022:
case 2324:
case 329:
case 2251:
case 689:
case 2290:
case 1742:
case 975:
case 3646:
case 3831:
case 1878:
case 294:
case 1608:
case 94:
case 2261:
case 2263:
case 2494:
case 2580:
case 3046:
case 2975:
case 358:
case 65:
case 85:
case 115:
case 810:
case 1848:
case 1760:
case 2680:
case 2038:
case 297:
case 2986:
case 3847:
case 3919:
case 3970:
case 3806:
case 3676:
case 610:
case 368:
case 490:
case 1155:
case 66:
case 1109:
case 590:
case 1772:
case 1226:
case 3962:
case 86:
case 2489:
case 3739:
case 3416:
case 2945:
case 3546:
case 1508:
case 3952:
case 2467:
case 3507:
case 308:
case 2790:
case 89:
case 1220:
case 560:
case 41:
case 1394:
case 2753:
case 69:
case 2751:
case 460:
case 3976:
case 767:
case 3619:
case 3670:
case 1766:
case 2686:
case 3214:
case 1083:
case 1835:
case 2980:
case 2045:
case 2829:
case 4029:
case 254:
case 707:
case 1683:
case 3540:
case 207:
case 754:
case 1424:
case 3522:
case 2938:
case 3123:
case 3121:
case 3479:
case 3410:
case 500:
case 926:
case 575:
case 3350:
case 4092:
case 2873:
case 735:
case 2601:
case 3599:
case 1047:
case 235:
case 3391:
case 3393:
case 1531:
case 633:
case 1132:
case 3084:
case 475:
case 3257:
case 3715:
case 1211:
case 1213:
case 833:
case 1197:
case 2974:
case 2749:
case 736:
case 3289:
case 3360:
case 576:
case 3421:
case 236:
case 2216:
case 3702:
case 1124:
case 188:
case 3372:
case 1606:
case 1647:
case 3935:
case 3267:
case 4073:
case 4071:
case 2536:
case 2544:
case 1455:
case 1409:
case 640:
case 2903:
case 2901:
case 1852:
case 840:
case 2414:
case 2167:
case 3635:
case 2530:
case 1947:
case 2317:
case 1870:
case 353:
case 1819:
case 139:
case 2279:
case 2210:
case 681:
case 3116:
case 2298:
case 2804:
case 3727:
case 881:
case 321:
case 664:
case 3131:
case 901:
case 478:
case 186:
case 3212:
case 1178:
case 3177:
case 864:
case 3664:
case 4039:
case 947:
case 1649:
case 738:
case 3532:
case 3380:
case 1510:
case 2839:
case 1049:
case 1337:
case 3597:
case 185:
case 604:
case 857:
case 1230:
case 3524:
case 3259:
case 657:
case 1701:
case 2169:
case 1949:
case 3386:
case 1774:
case 469:
case 289:
case 2558:
case 3851:
case 1817:
case 3964:
case 3818:
case 2277:
case 2443:
case 1485:
case 2112:
case 3729:
case 2187:
case 370:
case 2231:
case 2233:
case 3408:
case 3954:
case 409:
case 25:
case 2487:
case 444:
case 3773:
case 1738:
case 2060:
case 3737:
case 423:
case 2412:
case 1961:
case 1963:
case 1185:
case 2691:
case 2542:
case 365:
case 2520:
case 1096:
case 3625:
case 4002:
case 451:
case 2956:
case 3303:
case 2072:
case 2650:
case 3509:
case 1696:
case 4015:
case 2348:
case 2093:
case 2091:
case 3849:
case 3982:
case 1951:
case 1953:
case 3917:
case 1918:
case 1107:
case 1146:
case 2660:
case 3792:
case 1780:
case 2459:
case 2966:
case 4027:
case 2950:
case 1018:
case 1051:
case 1053:
case 2656:
case 2526:
case 3925:
case 849:
case 917:
case 2783:
case 1663:
case 1478:
case 2066:
case 98:
case 3477:
case 1499:
case 2666:
case 1061:
case 1063:
case 396:
case 832:
case 2208:
case 2894:
case 1618:
case 2056:
case 1651:
case 1653:
case 1521:
case 1523:
case 3682:
case 1690:
case 130:
case 2827:
case 3965:
case 3237:
case 473:
case 3273:
case 969:
case 3447:
case 233:
case 2857:
case 914:
case 3582:
case 1590:
case 1484:
case 2026:
case 1621:
case 1623:
case 491:
case 2556:
case 611:
case 3816:
case 836:
case 1312:
case 2889:
case 1387:
case 636:
case 1021:
case 1162:
case 2626:
case 3292:
case 1280:
case 2867:
case 1561:
case 591:
case 3344:
case 174:
case 1119:
case 1921:
case 1923:
case 547:
case 1832:
case 3336:
case 2020:
case 3009:
case 401:
case 978:
case 999:
case 356:
case 2171:
case 501:
case 2429:
case 2137:
case 2283:
case 2281:
case 3665:
case 447:
case 2560:
case 1176:
case 118:
case 1286:
case 2192:
case 2926:
case 1897:
case 2399:
case 3204:
case 3898:
case 2642:
case 362:
case 2550:
case 781:
case 697:
case 2206:
case 58:
case 2668:
case 1788:
case 2247:
case 3787:
case 428:
case 1135:
case 2322:
case 2340:
case 3769:
case 4095:
case 2011:
case 1910:
case 2058:
case 76:
case 48:
case 334:
case 2895:
case 3932:
case 1016:
case 3375:
case 70:
case 2658:
case 2492:
case 1203:
case 1201:
case 3705:
case 2334:
case 148:
case 1730:
case 2068:
case 79:
case 1679:
case 1855:
case 923:
case 1184:
case 1698:
case 944:
case 3697:
case 29:
case 2733:
case 2731:
case 951:
case 320:
case 3554:
case 880:
case 1452:
case 2814:
case 3147:
case 667:
case 3624:
case 3481:
case 680:
case 1419:
case 1470:
case 1865:
case 807:
case 607:
case 854:
case 1010:
case 1462:
case 641:
case 1098:
case 1549:
case 3097:
case 2385:
case 2836:
case 1576:
case 549:
case 3008:
case 1934:
case 2191:
case 2193:
case 2172:
case 129:
case 772:
case 3720:
case 1196:
case 1714:
case 2537:
case 1922:
case 3899:
case 1940:
case 1831:
case 432:
case 4036:
case 3878:
case 316:
case 2571:
case 1607:
case 1877:
case 3608:
case 3293:
case 3291:
case 225:
case 2225:
case 3464:
case 1562:
case 851:
case 4044:
case 2156:
case 1634:
case 651:
case 1358:
case 4088:
case 383:
case 1570:
case 823:
case 1311:
case 844:
case 1022:
case 623:
case 2830:
case 3908:
case 941:
case 2316:
case 226:
case 3260:
case 3583:
case 1640:
case 2166:
case 907:
case 3367:
case 1190:
case 1368:
case 1151:
case 3272:
case 814:
case 1294:
case 2912:
case 3807:
case 3846:
case 3631:
case 3633:
case 494:
case 2456:
case 669:
case 1149:
case 3228:
case 935:
case 594:
case 2:
case 869:
case 3164:
case 3417:
case 2732:
case 1418:
case 609:
case 1584:
case 3482:
case 2905:
case 2466:
case 1078:
case 911:
case 3885:
case 1099:
case 3425:
case 2264:
case 345:
case 2493:
case 419:
case 2128:
case 564:
case 699:
case 2669:
case 1789:
case 519:
case 3822:
case 784:
case 1999:
case 678:
case 2059:
case 2612:
case 284:
case 103:
case 2323:
case 250:
case 2254:
case 1535:
case 3500:
case 2875:
case 2012:
case 457:
case 2460:
case 1757:
case 3713:
case 1215:
case 1496:
case 557:
case 3834:
case 2472:
case 2069:
case 1948:
case 2629:
case 2886:
case 2390:
case 2168:
case 2505:
case 2351:
case 467:
case 787:
case 1794:
case 3906:
case 153:
case 2559:
case 760:
case 2224:
case 580:
case 1116:
case 1984:
case 3728:
case 2297:
case 2420:
case 2111:
case 441:
case 2361:
case 200:
case 2029:
case 541:
case 1035:
case 1881:
case 1883:
case 454:
case 3852:
case 4086:
case 407:
case 2512:
case 32:
case 1684:
case 1421:
case 1179:
case 597:
case 3876:
case 828:
case 3124:
case 3268:
case 817:
case 3647:
case 949:
case 1648:
case 2396:
case 4080:
case 3577:
case 3339:
case 2838:
case 2754:
case 1393:
case 659:
case 3132:
case 1715:
case 3213:
case 1084:
case 932:
case 3258:
case 2971:
case 919:
case 1019:
case 2937:
case 3424:
case 1522:
case 3683:
case 2265:
case 1540:
case 801:
case 1410:
case 964:
case 3497:
case 1498:
case 3756:
case 601:
case 4074:
case 1662:
case 2782:
case 957:
case 722:
case 3242:
case 222:
case 2255:
case 661:
case 3432:
case 1534:
case 1800:
case 1328:
case 535:
case 3791:
case 3793:
case 1416:
case 2725:
case 1546:
case 2092:
case 3983:
case 3165:
case 873:
case 3508:
case 2803:
case 2671:
case 1507:
case 2541:
case 776:
case 2037:
case 2349:
case 4001:
case 1970:
case 1806:
case 3302:
case 168:
case 1676:
case 691:
case 312:
case 3884:
case 2142:
case 2904:
case 436:
case 2413:
case 1962:
case 714:
case 589:
case 2246:
case 196:
case 2770:
case 2436:
case 2719:
case 2300:
case 3651:
case 1617:
case 3690:
case 2762:
case 2828:
case 489:
case 3523:
case 330:
case 3329:
case 3018:
case 3134:
case 45:
case 4028:
case 3051:
case 3053:
case 209:
case 1925:
case 1082:
case 3661:
case 1241:
case 3745:
case 1243:
case 3499:
case 1431:
case 55:
case 1433:
case 2752:
case 438:
case 3696:
case 1025:
case 1849:
case 2039:
case 1982:
case 2347:
case 2306:
case 1917:
case 940:
case 3918:
case 3864:
case 1108:
case 884:
case 278:
case 2776:
case 2430:
case 1792:
case 3146:
case 778:
case 684:
case 2240:
case 650:
case 2488:
case 106:
case 850:
case 3854:
case 981:
case 2514:
case 165:
case 2639:
case 1625:
case 1555:
case 1303:
case 2234:
case 1509:
case 313:
case 3446:
case 96:
case 910:
case 2856:
case 2627:
case 137:
case 3949:
case 4056:
case 2144:
case 3817:
case 1851:
case 1818:
case 872:
case 1964:
case 2694:
case 3304:
case 2866:
case 2850:
case 1064:
case 3373:
case 3510:
case 251:
case 3049:
case 3337:
case 2891:
case 3598:
case 385:
case 825:
case 3230:
case 244:
case 744:
case 3422:
case 1259:
case 3440:
case 3703:
case 3288:
case 1287:
case 1054:
case 1133:
case 826:
case 3178:
case 1177:
case 2784:
case 2015:
case 2602:
case 4050:
case 1896:
case 1380:
case 2927:
case 1532:
case 747:
case 3470:
case 3865:
case 938:
case 247:
case 701:
case 2502:
case 3010:
case 4020:
case 3462:
case 1564:
case 4042:
case 3098:
case 3343:
case 540:
case 1097:
case 2308:
case 3610:
case 761:
case 481:
case 2820:
case 3698:
case 2842:
case 2967:
case 1229:
case 120:
case 3452:
case 2235:
case 1106:
case 1483:
case 1481:
case 433:
case 1821:
case 2527:
case 875:
case 1932:
case 1375:
case 4026:
case 273:
case 2594:
case 533:
case 3476:
case 773:
case 2067:
case 876:
case 1712:
case 1100:
case 2248:
case 95:
case 2667:
case 2689:
case 3616:
case 791:
case 2707:
case 318:
case 59:
case 687:
case 2270:
case 2614:
case 1065:
case 1525:
case 1898:
case 2333:
case 162:
case 1609:
case 49:
case 1655:
case 2377:
case 3923:
case 3596:
case 2995:
case 102:
case 2474:
case 1055:
case 600:
case 156:
case 2252:
case 2785:
case 1400:
case 800:
case 1743:
case 3245:
case 1741:
case 1955:
case 46:
case 78:
case 192:
case 1816:
case 4013:
case 4011:
case 2095:
case 3387:
case 3162:
case 28:
case 4058:
case 1388:
case 3023:
case 728:
case 1292:
case 2740:
case 217:
case 3561:
case 3563:
case 1344:
case 3119:
case 56:
case 690:
case 410:
case 3238:
case 1965:
case 4068:
case 1271:
case 3775:
case 1447:
case 1517:
case 40:
case 3551:
case 259:
case 2813:
case 2811:
case 3359:
case 2695:
case 1330:
case 3484:
case 3590:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746475201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,];
var gg_b = "1746475201/";

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
