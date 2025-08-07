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
case 978:
case 1595:
case 1861:
case 3100:
case 673:
case 1876:
case 3152:
case 2187:
case 2873:
case 2611:
case 1354:
case 813:
case 771:
case 814:
case 915:
case 3383:
case 1664:
case 3065:
case 370:
case 112:
case 3805:
case 31:
case 3036:
case 3046:
case 3782:
case 3977:
case 812:
case 1015:
case 114:
case 2962:
case 1551:
case 2576:
case 690:
case 1094:
case 1767:
case 3695:
case 2895:
case 2561:
case 483:
case 484:
case 3854:
case 1998:
case 1573:
case 3717:
case 2654:
case 482:
case 1900:
case 3201:
case 4058:
case 1305:
case 394:
case 4010:
case 2223:
case 89:
case 446:
case 1493:
case 1177:
case 1226:
case 1265:
case 2233:
case 1514:
case 2243:
case 2496:
case 4092:
case 2204:
case 3079:
case 227:
case 581:
case 900:
case 2300:
case 3500:
case 2753:
case 1469:
case 2905:
case 943:
case 1151:
case 153:
case 154:
case 1829:
case 689:
case 3018:
case 1812:
case 54:
case 3050:
case 35:
case 2662:
case 1480:
case 3002:
case 145:
case 2877:
case 854:
case 2183:
case 1839:
case 1808:
case 3995:
case 2470:
case 2010:
case 1652:
case 2058:
case 660:
case 931:
case 2247:
case 3774:
case 2092:
case 2512:
case 3312:
case 625:
case 2529:
case 3329:
case 283:
case 828:
case 2745:
case 565:
case 1202:
case 363:
case 3308:
case 2508:
case 2539:
case 738:
case 3390:
case 1250:
case 2766:
case 1362:
case 2718:
case 2303:
case 396:
case 1225:
case 1266:
case 3685:
case 278:
case 2344:
case 443:
case 3534:
case 3970:
case 1988:
case 1245:
case 455:
case 2702:
case 3216:
case 442:
case 2324:
case 400:
case 1737:
case 2779:
case 3341:
case 3331:
case 1893:
case 1483:
case 2451:
case 3053:
case 3107:
case 2486:
case 2896:
case 2521:
case 4082:
case 1727:
case 1634:
case 3035:
case 3045:
case 2922:
case 1476:
case 2919:
case 710:
case 3188:
case 1170:
case 3025:
case 4017:
case 2197:
case 116:
case 3806:
case 1789:
case 3411:
case 2932:
case 2593:
case 1253:
case 1831:
case 1841:
case 1907:
case 877:
case 3710:
case 3758:
case 3792:
case 2256:
case 1596:
case 1821:
case 1760:
case 2281:
case 2414:
case 3238:
case 200:
case 3670:
case 1897:
case 1487:
case 861:
case 927:
case 1322:
case 2765:
case 366:
case 415:
case 1743:
case 2569:
case 161:
case 3057:
case 3134:
case 3228:
case 1723:
case 3103:
case 1332:
case 532:
case 3507:
case 2121:
case 2175:
case 2859:
case 478:
case 829:
case 2141:
case 129:
case 335:
case 255:
case 3380:
case 3272:
case 946:
case 1791:
case 1028:
case 1903:
case 507:
case 2597:
case 2619:
case 1257:
case 3397:
case 1934:
case 1944:
case 750:
case 3842:
case 3588:
case 1009:
case 2632:
case 2642:
case 1048:
case 2906:
case 231:
case 351:
case 1185:
case 1869:
case 885:
case 984:
case 983:
case 309:
case 705:
case 1196:
case 2240:
case 649:
case 688:
case 3878:
case 2230:
case 1429:
case 2678:
case 1072:
case 58:
case 1607:
case 1412:
case 3462:
case 1880:
case 4013:
case 2193:
case 2017:
case 2220:
case 1449:
case 2477:
case 2907:
case 592:
case 1593:
case 456:
case 3464:
case 2841:
case 1256:
case 3396:
case 4009:
case 277:
case 1281:
case 2159:
case 2875:
case 99:
case 3063:
case 2461:
case 3844:
case 1919:
case 3803:
case 2016:
case 4072:
case 3824:
case 3969:
case 2789:
case 1932:
case 1942:
case 1473:
case 1180:
case 3056:
case 1531:
case 2737:
case 115:
case 1779:
case 1575:
case 913:
case 1451:
case 2727:
case 3178:
case 570:
case 1521:
case 1750:
case 2225:
case 1169:
case 1344:
case 3213:
case 1885:
case 178:
case 2271:
case 3506:
case 3122:
case 878:
case 2245:
case 2235:
case 3119:
case 1263:
case 3768:
case 291:
case 1324:
case 2559:
case 1678:
case 3931:
case 4016:
case 562:
case 2429:
case 623:
case 96:
case 3680:
case 564:
case 2439:
case 1220:
case 928:
case 563:
case 2755:
case 1477:
case 769:
case 285:
case 336:
case 1619:
case 831:
case 1622:
case 3370:
case 2570:
case 2934:
case 2944:
case 2009:
case 1632:
case 320:
case 1642:
case 1906:
case 721:
case 131:
case 3669:
case 2924:
case 3578:
case 55:
case 953:
case 855:
case 143:
case 3217:
case 1267:
case 155:
case 60:
case 844:
case 1131:
case 1141:
case 945:
case 3040:
case 34:
case 952:
case 2704:
case 100:
case 1870:
case 1765:
case 2733:
case 3519:
case 3697:
case 2897:
case 186:
case 2322:
case 3400:
case 706:
case 381:
case 261:
case 2332:
case 3542:
case 3498:
case 687:
case 3888:
case 2342:
case 2723:
case 800:
case 1746:
case 1082:
case 2688:
case 2246:
case 2236:
case 2305:
case 1149:
case 2883:
case 1364:
case 1139:
case 3091:
case 2265:
case 2226:
case 1851:
case 29:
case 3314:
case 1886:
case 619:
case 1576:
case 1485:
case 1895:
case 1561:
case 179:
case 2767:
case 511:
case 428:
case 916:
case 879:
case 3511:
case 2900:
case 3929:
case 2441:
case 3912:
case 3864:
case 1583:
case 212:
case 3004:
case 798:
case 3908:
case 3023:
case 1291:
case 2015:
case 213:
case 2475:
case 1757:
case 214:
case 453:
case 3403:
case 2001:
case 2730:
case 3424:
case 991:
case 4068:
case 3554:
case 2799:
case 1187:
case 1611:
case 1529:
case 3983:
case 4094:
case 183:
case 703:
case 985:
case 1549:
case 1508:
case 1539:
case 3377:
case 38:
case 2362:
case 1590:
case 1470:
case 3852:
case 956:
case 2173:
case 146:
case 551:
case 49:
case 307:
case 1161:
case 740:
case 1176:
case 647:
case 3488:
case 3898:
case 2698:
case 253:
case 254:
case 1905:
case 1289:
case 4001:
case 3629:
case 1662:
case 2890:
case 3690:
case 13:
case 1877:
case 1183:
case 2849:
case 3639:
case 737:
case 2781:
case 3047:
case 3037:
case 3292:
case 1260:
case 412:
case 626:
case 3027:
case 3210:
case 1398:
case 566:
case 413:
case 1753:
case 2195:
case 1300:
case 827:
case 1290:
case 1123:
case 2550:
case 3262:
case 2518:
case 2420:
case 1208:
case 1239:
case 1249:
case 338:
case 764:
case 763:
case 569:
case 475:
case 2502:
case 2499:
case 3302:
case 1133:
case 2165:
case 1368:
case 1104:
case 629:
case 2430:
case 3724:
case 2994:
case 2579:
case 3379:
case 1537:
case 2775:
case 521:
case 1457:
case 367:
case 2000:
case 287:
case 1527:
case 3660:
case 661:
case 2098:
case 149:
case 959:
case 3943:
case 3472:
case 1850:
case 3012:
case 1062:
case 2668:
case 2915:
case 1191:
case 888:
case 1589:
case 224:
case 223:
case 3039:
case 2847:
case 857:
case 1879:
case 1155:
case 2901:
case 4064:
case 3510:
case 656:
case 1560:
case 3627:
case 3592:
case 3448:
case 2392:
case 157:
case 2456:
case 4052:
case 2102:
case 2214:
case 3365:
case 2481:
case 2565:
case 792:
case 218:
case 487:
case 4000:
case 1315:
case 2769:
case 2118:
case 2536:
case 2546:
case 3336:
case 3707:
case 1301:
case 1958:
case 3484:
case 458:
case 1910:
case 2273:
case 3655:
case 3960:
case 1054:
case 691:
case 1137:
case 2855:
case 1992:
case 40:
case 1276:
case 2780:
case 176:
case 2797:
case 2251:
case 1591:
case 1865:
case 1189:
case 2843:
case 2833:
case 2804:
case 2286:
case 1836:
case 1846:
case 3788:
case 677:
case 3623:
case 919:
case 876:
case 2968:
case 371:
case 1759:
case 117:
case 3937:
case 2601:
case 3076:
case 3416:
case 1466:
case 1425:
case 616:
case 3110:
case 1555:
case 1471:
case 1011:
case 148:
case 189:
case 1795:
case 3667:
case 4034:
case 1418:
case 2007:
case 653:
case 502:
case 645:
case 4024:
case 1540:
case 1156:
case 90:
case 503:
case 1599:
case 1402:
case 2259:
case 848:
case 889:
case 709:
case 2916:
case 1479:
case 2437:
case 1019:
case 2628:
case 1022:
case 751:
case 230:
case 350:
case 1042:
case 2648:
case 1786:
case 1032:
case 1913:
case 2427:
case 2270:
case 3809:
case 3582:
case 3848:
case 2382:
case 987:
case 1372:
case 2820:
case 3956:
case 3620:
case 125:
case 259:
case 3517:
case 66:
case 1773:
case 825:
case 568:
case 923:
case 3640:
case 3630:
case 2830:
case 628:
case 2166:
case 2984:
case 3113:
case 2171:
case 1328:
case 3222:
case 419:
case 3219:
case 2135:
case 2145:
case 1309:
case 1338:
case 2460:
case 2088:
case 1682:
case 3031:
case 2972:
case 2787:
case 2433:
case 2443:
case 1426:
case 1581:
case 1140:
case 2296:
case 1436:
case 1917:
case 614:
case 2423:
case 3021:
case 1674:
case 918:
case 2553:
case 1120:
case 3700:
case 174:
case 3663:
case 1835:
case 1845:
case 2863:
case 1384:
case 2003:
case 872:
case 4007:
case 3816:
case 37:
case 2285:
case 711:
case 2938:
case 1871:
case 1221:
case 2856:
case 3920:
case 2491:
case 3093:
case 3117:
case 1275:
case 3681:
case 1241:
case 1231:
case 4088:
case 3999:
case 598:
case 2729:
case 3494:
case 459:
case 3345:
case 2545:
case 3335:
case 3206:
case 2684:
case 3371:
case 2571:
case 1777:
case 890:
case 796:
case 2566:
case 2790:
case 1984:
case 380:
case 3070:
case 1125:
case 646:
case 2328:
case 801:
case 3528:
case 306:
case 2269:
case 3657:
case 2714:
case 3116:
case 2682:
case 3509:
case 3548:
case 2338:
case 2309:
case 3572:
case 684:
case 74:
case 2372:
case 225:
case 988:
case 949:
case 1899:
case 1489:
case 682:
case 1317:
case 2773:
case 1840:
case 3953:
case 1783:
case 1628:
case 2022:
case 567:
case 2479:
case 1437:
case 2019:
case 1447:
case 130:
case 3288:
case 627:
case 1427:
case 1270:
case 2786:
case 2042:
case 2032:
case 1638:
case 1609:
case 3971:
case 1557:
case 3966:
case 2751:
case 369:
case 3320:
case 2520:
case 473:
case 1867:
case 289:
case 2450:
case 1007:
case 2418:
case 2530:
case 3340:
case 3330:
case 2540:
case 2974:
case 538:
case 2599:
case 2617:
case 2402:
case 3399:
case 3109:
case 3138:
case 1729:
case 2316:
case 3516:
case 917:
case 290:
case 2563:
case 3363:
case 2982:
case 1708:
case 1313:
case 3244:
case 1566:
case 1790:
case 3203:
case 460:
case 1856:
case 2275:
case 571:
case 1881:
case 2241:
case 2231:
case 2167:
case 3096:
case 2845:
case 1863:
case 448:
case 2384:
case 274:
case 1044:
case 1157:
case 1034:
case 273:
case 3645:
case 3635:
case 1003:
case 1616:
case 1024:
case 2825:
case 2613:
case 3813:
case 1948:
case 1285:
case 1909:
case 1938:
case 4019:
case 2426:
case 2465:
case 4022:
case 1972:
case 2140:
case 3356:
case 1296:
case 2556:
case 1404:
case 4032:
case 2446:
case 1423:
case 3874:
case 1553:
case 2120:
case 2155:
case 476:
case 1901:
case 2879:
case 1310:
case 3298:
case 1392:
case 3252:
case 1827:
case 2560:
case 2287:
case 3194:
case 257:
case 368:
case 925:
case 824:
case 417:
case 249:
case 288:
case 1467:
case 3618:
case 3965:
case 2818:
case 122:
case 1668:
case 123:
case 3417:
case 3602:
case 733:
case 2191:
case 2610:
case 2658:
case 2547:
case 3347:
case 887:
case 741:
case 600:
case 1731:
case 187:
case 1000:
case 1775:
case 2457:
case 1098:
case 2692:
case 1860:
case 3327:
case 3892:
case 1518:
case 1136:
case 1146:
case 1550:
case 643:
case 3115:
case 303:
case 989:
case 2249:
case 1502:
case 1889:
case 1499:
case 302:
case 2229:
case 2104:
case 3568:
case 2212:
case 3594:
case 449:
case 488:
case 2445:
case 2435:
case 2160:
case 4062:
case 2425:
case 2466:
case 1295:
case 1251:
case 2865:
case 2189:
case 1843:
case 1833:
case 3950:
case 276:
case 1797:
case 398:
case 1804:
case 3646:
case 2836:
case 2846:
case 1615:
case 457:
case 3474:
case 3014:
case 2301:
case 510:
case 973:
case 2261:
case 2992:
case 1855:
case 2054:
case 2147:
case 2137:
case 1780:
case 972:
case 2276:
case 3304:
case 3168:
case 615:
case 3722:
case 1102:
case 2533:
case 3343:
case 1891:
case 1565:
case 1526:
case 2453:
case 118:
case 1546:
case 2523:
case 1150:
case 1118:
case 3086:
case 2274:
case 2693:
case 3737:
case 3893:
case 1341:
case 1321:
case 1107:
case 1696:
case 3271:
case 1970:
case 4020:
case 2132:
case 2142:
case 3225:
case 196:
case 391:
case 1524:
case 1216:
case 2122:
case 2506:
case 3306:
case 1710:
case 1758:
case 3831:
case 2464:
case 436:
case 3907:
case 2641:
case 2675:
case 1792:
case 2621:
case 671:
case 3821:
case 3603:
case 772:
case 3476:
case 2834:
case 2385:
case 3461:
case 1045:
case 1035:
case 3644:
case 2063:
case 4067:
case 316:
case 773:
case 1411:
case 1071:
case 3624:
case 1025:
case 2824:
case 2217:
case 2020:
case 1659:
case 934:
case 933:
case 1507:
case 638:
case 1272:
case 24:
case 2040:
case 2030:
case 1996:
case 3322:
case 2106:
case 3319:
case 166:
case 3733:
case 2519:
case 4081:
case 2452:
case 1238:
case 1209:
case 1248:
case 1124:
case 667:
case 3723:
case 2498:
case 1369:
case 866:
case 2400:
case 1228:
case 3196:
case 2807:
case 2931:
case 3412:
case 3072:
case 584:
case 583:
case 789:
case 3755:
case 3408:
case 2680:
case 3490:
case 2282:
case 851:
case 3791:
case 3257:
case 1397:
case 1822:
case 546:
case 941:
case 1588:
case 3048:
case 220:
case 3009:
case 11:
case 1805:
case 312:
case 2912:
case 3441:
case 4037:
case 2929:
case 1614:
case 2990:
case 313:
case 2351:
case 2908:
case 2939:
case 1046:
case 2386:
case 3421:
case 2676:
case 3861:
case 2444:
case 2434:
case 3720:
case 1100:
case 610:
case 717:
case 578:
case 3799:
case 1811:
case 1152:
case 2424:
case 3730:
case 3740:
case 432:
case 2683:
case 2091:
case 892:
case 3493:
case 1564:
case 3883:
case 2505:
case 3305:
case 3236:
case 3246:
case 4060:
case 2709:
case 893:
case 894:
case 2748:
case 995:
case 2314:
case 441:
case 192:
case 3514:
case 1651:
case 1695:
case 3767:
case 3094:
case 3952:
case 1361:
case 2987:
case 2772:
case 48:
case 3311:
case 3998:
case 4089:
case 2373:
case 2055:
case 3573:
case 2612:
case 3829:
case 85:
case 1050:
case 2629:
case 3812:
case 233:
case 354:
case 234:
case 1677:
case 808:
case 2639:
case 2608:
case 3839:
case 15:
case 1862:
case 352:
case 605:
case 3890:
case 2961:
case 4004:
case 2037:
case 2154:
case 2047:
case 1422:
case 650:
case 757:
case 586:
case 3195:
case 981:
case 500:
case 1442:
case 1432:
case 1973:
case 2210:
case 2027:
case 4023:
case 163:
case 1312:
case 1268:
case 2716:
case 36:
case 3250:
case 1390:
case 2105:
case 2562:
case 3218:
case 2377:
case 3577:
case 1349:
case 1164:
case 965:
case 328:
case 863:
case 3887:
case 2687:
case 936:
case 3698:
case 2898:
case 920:
case 2060:
case 3561:
case 3895:
case 775:
case 2361:
case 2695:
case 463:
case 1987:
case 3576:
case 2201:
case 462:
case 577:
case 3364:
case 3139:
case 2564:
case 1091:
case 1728:
case 3223:
case 294:
case 1162:
case 1738:
case 1709:
case 3112:
case 1748:
case 3129:
case 3886:
case 3496:
case 1314:
case 292:
case 4018:
case 4050:
case 591:
case 1676:
case 2100:
case 2811:
case 3873:
case 3187:
case 2152:
case 21:
case 2805:
case 270:
case 1929:
case 1864:
case 2614:
case 3757:
case 1990:
case 1386:
case 1939:
case 2046:
case 841:
case 1687:
case 346:
case 680:
case 1898:
case 1060:
case 3092:
case 1800:
case 556:
case 3237:
case 492:
case 3161:
case 3459:
case 263:
case 264:
case 384:
case 2329:
case 3529:
case 88:
case 1716:
case 1983:
case 70:
case 1105:
case 18:
case 2951:
case 1562:
case 3766:
case 1089:
case 2986:
case 1377:
case 2349:
case 2713:
case 3508:
case 1292:
case 470:
case 1961:
case 621:
case 41:
case 2387:
case 966:
case 3587:
case 1037:
case 1976:
case 4065:
case 327:
case 2079:
case 3753:
case 3300:
case 2973:
case 4036:
case 1210:
case 1027:
case 3398:
case 1258:
case 2050:
case 669:
case 1407:
case 2018:
case 832:
case 134:
case 935:
case 3183:
case 833:
case 3877:
case 834:
case 1649:
case 2002:
case 1639:
case 3662:
case 722:
case 33:
case 25:
case 2914:
case 2188:
case 3919:
case 3922:
case 2045:
case 409:
case 211:
case 3942:
case 2071:
case 2284:
case 3606:
case 2806:
case 3197:
case 1969:
case 2025:
case 2066:
case 2405:
case 993:
case 2710:
case 59:
case 2393:
case 3593:
case 3414:
case 451:
case 1675:
case 3281:
case 992:
case 1980:
case 1621:
case 3885:
case 3495:
case 2970:
case 3344:
case 3334:
case 2544:
case 1997:
case 2503:
case 3718:
case 1122:
case 2454:
case 1119:
case 435:
case 2331:
case 3541:
case 514:
case 1693:
case 315:
case 466:
case 513:
case 970:
case 2696:
case 3521:
case 2107:
case 1178:
case 2375:
case 4057:
case 1282:
case 2397:
case 3622:
case 836:
case 120:
case 637:
case 3678:
case 1807:
case 865:
case 963:
case 209:
case 1359:
case 4035:
case 3017:
case 3220:
case 4071:
case 1921:
case 962:
case 2462:
case 1697:
case 881:
case 3726:
case 1522:
case 1106:
case 386:
case 2670:
case 300:
case 1452:
case 2209:
case 1532:
case 1888:
case 3736:
case 3746:
case 181:
case 1400:
case 1715:
case 2369:
case 2057:
case 4053:
case 3859:
case 2659:
case 343:
case 3121:
case 1578:
case 604:
case 603:
case 496:
case 14:
case 1040:
case 1030:
case 3580:
case 2272:
case 2380:
case 355:
case 602:
case 235:
case 1963:
case 940:
case 2288:
case 2945:
case 3019:
case 3479:
case 3022:
case 2184:
case 756:
case 3751:
case 2966:
case 2925:
case 3297:
case 1357:
case 1069:
case 3032:
case 3042:
case 3786:
case 1848:
case 1582:
case 1809:
case 608:
case 3450:
case 389:
case 269:
case 3795:
case 2754:
case 105:
case 3402:
case 558:
case 3974:
case 3156:
case 2340:
case 902:
case 1468:
case 3269:
case 1764:
case 206:
case 1097:
case 3328:
case 761:
case 2410:
case 2070:
case 360:
case 3338:
case 2548:
case 2509:
case 2538:
case 2882:
case 3682:
case 1219:
case 4085:
case 729:
case 524:
case 2059:
case 1620:
case 325:
case 3567:
case 139:
case 663:
case 2953:
case 1640:
case 2207:
case 3773:
case 1699:
case 662:
case 1182:
case 810:
case 1401:
case 87:
case 1816:
case 2645:
case 373:
case 1663:
case 3835:
case 3006:
case 3825:
case 110:
case 3866:
case 17:
case 1752:
case 2356:
case 1967:
case 1041:
case 670:
case 1031:
case 3581:
case 3465:
case 3426:
case 421:
case 3199:
case 3293:
case 3674:
case 2874:
case 3917:
case 1335:
case 1884:
case 1206:
case 390:
case 2516:
case 791:
case 2109:
case 2762:
case 2203:
case 1325:
case 2128:
case 2244:
case 3982:
case 1681:
case 406:
case 1093:
case 694:
case 3221:
case 4070:
case 1656:
case 998:
case 1:
case 692:
case 1930:
case 3167:
case 3241:
case 3853:
case 3537:
case 666:
case 3610:
case 2327:
case 3527:
case 1660:
case 3692:
case 4051:
case 204:
case 3239:
case 138:
case 1262:
case 1991:
case 2568:
case 3368:
case 3104:
case 1724:
case 635:
case 1689:
case 838:
case 3143:
case 2298:
case 980:
case 1510:
case 1428:
case 906:
case 501:
case 1637:
case 2679:
case 3155:
case 547:
case 357:
case 237:
case 2194:
case 3796:
case 651:
case 1627:
case 2252:
case 1592:
case 1448:
case 609:
case 1943:
case 1029:
case 1933:
case 2650:
case 3818:
case 22:
case 2926:
case 2618:
case 1012:
case 3850:
case 1472:
case 1904:
case 268:
case 3802:
case 754:
case 2936:
case 4073:
case 1039:
case 1923:
case 559:
case 1049:
case 3062:
case 1484:
case 1894:
case 3958:
case 1211:
case 2095:
case 404:
case 3910:
case 2778:
case 1707:
case 3127:
case 197:
case 3137:
case 1960:
case 3054:
case 3261:
case 1365:
case 2719:
case 3533:
case 2333:
case 79:
case 2722:
case 440:
case 3504:
case 2742:
case 2732:
case 2323:
case 1346:
case 3453:
case 2515:
case 3315:
case 1801:
case 1192:
case 2979:
case 42:
case 1076:
case 1937:
case 468:
case 317:
case 3445:
case 1254:
case 2594:
case 2413:
case 1927:
case 3555:
case 2073:
case 3011:
case 3471:
case 3425:
case 1158:
case 3770:
case 3005:
case 1604:
case 2665:
case 2626:
case 376:
case 3826:
case 714:
case 3591:
case 2918:
case 2391:
case 871:
case 1815:
case 171:
case 2014:
case 437:
case 2902:
case 1788:
case 2012:
case 1618:
case 73:
case 2029:
case 1650:
case 2933:
case 322:
case 12:
case 1926:
case 2904:
case 939:
case 1936:
case 1077:
case 1602:
case 2039:
case 323:
case 324:
case 2868:
case 3915:
case 2090:
case 665:
case 3668:
case 636:
case 3310:
case 2558:
case 1298:
case 2647:
case 3901:
case 2637:
case 1200:
case 2428:
case 3837:
case 3847:
case 620:
case 3392:
case 2438:
case 2448:
case 2592:
case 2627:
case 358:
case 238:
case 104:
case 103:
case 2703:
case 2991:
case 2350:
case 782:
case 3146:
case 102:
case 3440:
case 1568:
case 64:
case 3126:
case 3499:
case 548:
case 1706:
case 804:
case 2379:
case 3731:
case 3741:
case 2087:
case 3994:
case 1858:
case 3052:
case 140:
case 681:
case 3098:
case 3721:
case 1482:
case 1101:
case 1327:
case 2660:
case 840:
case 387:
case 746:
case 2604:
case 3804:
case 3251:
case 2643:
case 3797:
case 1950:
case 3064:
case 271:
case 1474:
case 2815:
case 3968:
case 2623:
case 898:
case 1646:
case 1979:
case 2947:
case 4029:
case 3601:
case 4012:
case 3463:
case 2254:
case 1594:
case 590:
case 4049:
case 1073:
case 2158:
case 2110:
case 2083:
case 3481:
case 2326:
case 1168:
case 3150:
case 1742:
case 1515:
case 438:
case 2894:
case 2211:
case 1501:
case 1778:
case 97:
case 3780:
case 297:
case 3855:
case 779:
case 2655:
case 3179:
case 1367:
case 2956:
case 755:
case 3761:
case 3776:
case 1207:
case 2640:
case 3489:
case 743:
case 68:
case 2517:
case 1528:
case 2764:
case 106:
case 2113:
case 4093:
case 2097:
case 557:
case 2242:
case 1458:
case 1410:
case 3166:
case 180:
case 700:
case 880:
case 3145:
case 347:
case 3135:
case 1657:
case 806:
case 633:
case 634:
case 169:
case 632:
case 2468:
case 1340:
case 250:
case 2963:
case 1935:
case 3783:
case 3437:
case 121:
case 2828:
case 3916:
case 1925:
case 2069:
case 3557:
case 326:
case 1184:
case 967:
case 2809:
case 3609:
case 2681:
case 2117:
case 3491:
case 2:
case 2920:
case 3856:
case 1096:
case 319:
case 2574:
case 3684:
case 2206:
case 2335:
case 3535:
case 2345:
case 2494:
case 439:
case 2884:
case 1109:
case 1138:
case 3790:
case 3525:
case 1203:
case 1762:
case 3749:
case 3739:
case 3455:
case 3571:
case 2371:
case 1356:
case 199:
case 450:
case 3404:
case 2752:
case 3443:
case 2041:
case 2700:
case 1874:
case 2415:
case 2798:
case 2816:
case 3616:
case 2182:
case 2401:
case 3863:
case 1584:
case 1645:
case 3034:
case 2663:
case 3157:
case 3044:
case 1813:
case 27:
case 1625:
case 4080:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754578802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,];
var gg_b = "1754578802/";

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
