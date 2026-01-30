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
case 1154:
case 2298:
case 2821:
case 3911:
case 2494:
case 280:
case 1176:
case 3549:
case 3807:
case 53:
case 3247:
case 2709:
case 1375:
case 1341:
case 3152:
case 2429:
case 3232:
case 2600:
case 3416:
case 2862:
case 1326:
case 927:
case 2846:
case 2206:
case 1887:
case 3243:
case 1835:
case 3054:
case 528:
case 1234:
case 2511:
case 999:
case 2251:
case 1532:
case 4081:
case 1474:
case 2673:
case 2317:
case 2735:
case 3764:
case 331:
case 2787:
case 852:
case 1543:
case 3986:
case 1762:
case 2040:
case 943:
case 1951:
case 437:
case 1547:
case 863:
case 633:
case 1249:
case 2313:
case 3481:
case 170:
case 881:
case 367:
case 2783:
case 3330:
case 3282:
case 2172:
case 2591:
case 1885:
case 98:
case 523:
case 3728:
case 126:
case 3027:
case 1866:
case 1920:
case 1969:
case 3204:
case 714:
case 2074:
case 3245:
case 1833:
case 814:
case 1377:
case 3991:
case 1440:
case 2558:
case 30:
case 2742:
case 296:
case 1029:
case 2563:
case 3967:
case 2452:
case 2536:
case 1545:
case 3194:
case 789:
case 2675:
case 3653:
case 768:
case 2641:
case 3502:
case 1582:
case 616:
case 1300:
case 7:
case 3619:
case 469:
case 2785:
case 373:
case 3657:
case 3348:
case 3160:
case 877:
case 8:
case 62:
case 2567:
case 339:
case 3584:
case 3092:
case 2269:
case 3963:
case 2620:
case 3595:
case 2409:
case 66:
case 693:
case 83:
case 3823:
case 3559:
case 429:
case 3219:
case 1105:
case 3133:
case 3517:
case 3930:
case 1037:
case 73:
case 2110:
case 3166:
case 1033:
case 728:
case 2801:
case 3005:
case 2530:
case 213:
case 3827:
case 2917:
case 2959:
case 3185:
case 2275:
case 2729:
case 1042:
case 3716:
case 2760:
case 1398:
case 1553:
case 4090:
case 1926:
case 973:
case 1756:
case 172:
case 2349:
case 1774:
case 1446:
case 2487:
case 3671:
case 3604:
case 956:
case 3781:
case 850:
case 408:
case 649:
case 59:
case 1421:
case 581:
case 3892:
case 1217:
case 2378:
case 1259:
case 1975:
case 1941:
case 3490:
case 2580:
case 2302:
case 1900:
case 723:
case 3428:
case 3007:
case 2164:
case 3135:
case 1788:
case 2277:
case 1318:
case 218:
case 327:
case 2579:
case 2915:
case 823:
case 3336:
case 399:
case 2997:
case 3597:
case 1852:
case 1740:
case 259:
case 698:
case 2548:
case 3708:
case 1678:
case 3980:
case 3003:
case 2433:
case 1599:
case 1320:
case 3731:
case 1297:
case 1369:
case 589:
case 2922:
case 2466:
case 2606:
case 3410:
case 568:
case 3643:
case 3070:
case 1555:
case 1215:
case 967:
case 2200:
case 3089:
case 847:
case 1524:
case 1170:
case 1009:
case 157:
case 264:
case 2698:
case 2485:
case 2437:
case 3522:
case 1304:
case 3997:
case 2593:
case 658:
case 1162:
case 2336:
case 2948:
case 1146:
case 786:
case 3580:
case 3302:
case 2224:
case 2980:
case 1064:
case 1500:
case 1121:
case 1382:
case 3046:
case 108:
case 2876:
case 440:
case 2708:
case 2183:
case 3190:
case 3384:
case 2367:
case 359:
case 336:
case 3714:
case 3062:
case 3200:
case 2632:
case 3752:
case 1573:
case 3442:
case 2643:
case 1776:
case 3606:
case 3466:
case 3651:
case 1405:
case 243:
case 3698:
case 1896:
case 2522:
case 4066:
case 3437:
case 2647:
case 1686:
case 364:
case 4033:
case 2358:
case 1280:
case 434:
case 3110:
case 1881:
case 506:
case 2257:
case 2133:
case 3794:
case 2517:
case 325:
case 3913:
case 1691:
case 832:
case 1343:
case 3409:
case 2142:
case 732:
case 2365:
case 3620:
case 1872:
case 457:
case 817:
case 1470:
case 653:
case 2386:
case 2137:
case 2044:
case 3959:
case 2185:
case 382:
case 1010:
case 313:
case 1658:
case 2827:
case 3530:
case 3801:
case 2671:
case 2464:
case 605:
case 1636:
case 3349:
case 4083:
case 3128:
case 2645:
case 3050:
case 3618:
case 17:
case 965:
case 1575:
case 1919:
case 2772:
case 790:
case 1230:
case 845:
case 1150:
case 2039:
case 874:
case 592:
case 1526:
case 575:
case 745:
case 3483:
case 1028:
case 1407:
case 774:
case 2781:
case 996:
case 1174:
case 1520:
case 1569:
case 2023:
case 183:
case 442:
case 982:
case 3591:
case 1739:
case 2958:
case 3361:
case 494:
case 4014:
case 3172:
case 3218:
case 3558:
case 3414:
case 3074:
case 2245:
case 2271:
case 2668:
case 470:
case 2380:
case 1744:
case 2710:
case 3641:
case 1454:
case 3733:
case 2194:
case 685:
case 1518:
case 2379:
case 3452:
case 2967:
case 3984:
case 3393:
case 3742:
case 396:
case 3563:
case 256:
case 3397:
case 2963:
case 239:
case 3567:
case 2584:
case 3220:
case 2129:
case 2348:
case 1945:
case 3315:
case 2657:
case 3737:
case 1138:
case 3785:
case 1425:
case 1680:
case 3978:
case 1353:
case 806:
case 3709:
case 1679:
case 532:
case 4029:
case 2247:
case 1286:
case 959:
case 936:
case 3131:
case 706:
case 1265:
case 3511:
case 3251:
case 169:
case 517:
case 1864:
case 830:
case 4094:
case 2803:
case 2054:
case 188:
case 3846:
case 1648:
case 918:
case 2578:
case 1319:
case 3600:
case 900:
case 1770:
case 730:
case 3565:
case 41:
case 1211:
case 2699:
case 1551:
case 3395:
case 14:
case 2870:
case 3040:
case 2889:
case 1947:
case 590:
case 85:
case 1703:
case 2764:
case 3735:
case 3787:
case 426:
case 3317:
case 1008:
case 1427:
case 1423:
case 267:
case 1707:
case 3677:
case 1096:
case 2481:
case 3313:
case 744:
case 892:
case 1598:
case 792:
case 2965:
case 1140:
case 1368:
case 1479:
case 800:
case 458:
case 1331:
case 4000:
case 695:
case 1480:
case 2376:
case 930:
case 3237:
case 1791:
case 3694:
case 223:
case 3539:
case 1019:
case 386:
case 718:
case 3950:
case 3884:
case 2867:
case 2210:
case 1448:
case 2550:
case 859:
case 1244:
case 2863:
case 149:
case 1845:
case 1205:
case 2126:
case 2836:
case 3119:
case 419:
case 215:
case 736:
case 3629:
case 2616:
case 3660:
case 2325:
case 1928:
case 3242:
case 1396:
case 3544:
case 596:
case 1566:
case 2672:
case 3388:
case 2030:
case 16:
case 975:
case 1159:
case 1117:
case 4077:
case 2858:
case 1627:
case 1068:
case 2745:
case 1736:
case 2455:
case 484:
case 1542:
case 2704:
case 1763:
case 1195:
case 2681:
case 3168:
case 247:
case 3095:
case 2424:
case 2228:
case 565:
case 864:
case 1585:
case 2782:
case 2312:
case 2944:
case 751:
case 2886:
case 1024:
case 1161:
case 580:
case 2173:
case 524:
case 3155:
case 1207:
case 2327:
case 825:
case 2290:
case 3301:
case 3199:
case 411:
case 141:
case 1122:
case 3614:
case 1711:
case 882:
case 1430:
case 2323:
case 317:
case 476:
case 2608:
case 2177:
case 2264:
case 3287:
case 1055:
case 2865:
case 782:
case 1612:
case 1765:
case 1654:
case 2631:
case 2453:
case 3475:
case 3706:
case 2392:
case 405:
case 3097:
case 2743:
case 2562:
case 4026:
case 3503:
case 1535:
case 390:
case 2546:
case 2907:
case 1289:
case 3652:
case 2811:
case 3921:
case 3015:
case 2079:
case 2521:
case 1115:
case 3946:
case 198:
case 2903:
case 1964:
case 250:
case 374:
case 3962:
case 3093:
case 2747:
case 345:
case 1197:
case 3798:
case 2457:
case 3426:
case 2086:
case 2151:
case 642:
case 1047:
case 518:
case 3143:
case 1225:
case 1908:
case 2305:
case 3420:
case 1779:
case 3469:
case 2588:
case 2912:
case 2344:
case 1780:
case 3512:
case 3252:
case 4069:
case 1032:
case 133:
case 670:
case 3147:
case 3861:
case 1855:
case 214:
case 1276:
case 1458:
case 2231:
case 2198:
case 1514:
case 485:
case 2445:
case 1212:
case 3897:
case 1552:
case 2755:
case 268:
case 2339:
case 2471:
case 1463:
case 974:
case 796:
case 2925:
case 2011:
case 1328:
case 945:
case 1931:
case 3049:
case 635:
case 865:
case 990:
case 3777:
case 277:
case 3683:
case 2296:
case 3893:
case 422:
case 3350:
case 1102:
case 2118:
case 2303:
case 1364:
case 171:
case 306:
case 1223:
case 2628:
case 2067:
case 525:
case 1916:
case 2281:
case 3171:
case 780:
case 1184:
case 1045:
case 2992:
case 582:
case 1529:
case 1853:
case 1071:
case 1004:
case 1411:
case 2272:
case 3182:
case 3642:
case 2830:
case 2574:
case 2501:
case 2120:
case 3229:
case 3260:
case 404:
case 1605:
case 2753:
case 1868:
case 3741:
case 2610:
case 626:
case 2370:
case 4051:
case 1486:
case 1972:
case 2447:
case 3637:
case 29:
case 375:
case 3498:
case 2389:
case 3817:
case 3956:
case 1292:
case 281:
case 3859:
case 1163:
case 3067:
case 3628:
case 2145:
case 1826:
case 206:
case 1929:
case 1136:
case 2362:
case 915:
case 2346:
case 1449:
case 1650:
case 3272:
case 2182:
case 1383:
case 1994:
case 58:
case 1713:
case 230:
case 1875:
case 3063:
case 1516:
case 1478:
case 1274:
case 3443:
case 731:
case 548:
case 778:
case 2741:
case 1572:
case 2666:
case 25:
case 2775:
case 683:
case 1309:
case 1434:
case 2633:
case 3556:
case 3432:
case 878:
case 661:
case 2229:
case 3120:
case 3501:
case 2642:
case 1581:
case 292:
case 1069:
case 2859:
case 1020:
case 3757:
case 2294:
case 2637:
case 2498:
case 3719:
case 479:
case 3447:
case 767:
case 2895:
case 244:
case 2822:
case 3344:
case 1366:
case 2132:
case 2609:
case 3588:
case 1333:
case 3305:
case 3106:
case 1098:
case 3151:
case 1165:
case 1342:
case 3086:
case 104:
case 3231:
case 1797:
case 80:
case 3540:
case 314:
case 3065:
case 1051:
case 1873:
case 2988:
case 1385:
case 93:
case 1337:
case 70:
case 2512:
case 2252:
case 471:
case 3799:
case 2214:
case 4082:
case 2815:
case 1402:
case 2576:
case 950:
case 2687:
case 1646:
case 3755:
case 3339:
case 773:
case 4071:
case 839:
case 3296:
case 3724:
case 543:
case 1484:
case 3:
case 146:
case 2777:
case 3976:
case 756:
case 3879:
case 739:
case 2049:
case 1722:
case 1459:
case 1417:
case 697:
case 914:
case 3290:
case 2022:
case 1749:
case 3327:
case 2283:
case 3173:
case 3989:
case 184:
case 33:
case 1688:
case 120:
case 4068:
case 3970:
case 1077:
case 3696:
case 2570:
case 1851:
case 2061:
case 2834:
case 88:
case 1778:
case 3264:
case 2235:
case 2287:
case 217:
case 1806:
case 3608:
case 2589:
case 891:
case 1640:
case 1413:
case 78:
case 3732:
case 2921:
case 3811:
case 2015:
case 1180:
case 977:
case 9:
case 1394:
case 158:
case 1564:
case 290:
case 2097:
case 578:
case 2441:
case 748:
case 4019:
case 531:
case 3453:
case 2751:
case 2426:
case 4053:
case 1360:
case 610:
case 1590:
case 274:
case 2849:
case 3903:
case 1935:
case 2946:
case 3100:
case 3521:
case 727:
case 2884:
case 3141:
case 286:
case 2539:
case 2237:
case 799:
case 3354:
case 50:
case 2242:
case 498:
case 2802:
case 2660:
case 655:
case 2629:
case 3836:
case 1638:
case 315:
case 2233:
case 1041:
case 3126:
case 1075:
case 2266:
case 3704:
case 2473:
case 1674:
case 162:
case 981:
case 3745:
case 2505:
case 963:
case 3030:
case 111:
case 1937:
case 1985:
case 1250:
case 3672:
case 1702:
case 2544:
case 2059:
case 3312:
case 3944:
case 1130:
case 2017:
case 1933:
case 153:
case 3905:
case 743:
case 3228:
case 2095:
case 4055:
case 2168:
case 347:
case 176:
case 1314:
case 1942:
case 2477:
case 1785:
case 1737:
case 3138:
case 2918:
case 1626:
case 1902:
case 2094:
case 1567:
case 1397:
case 3971:
case 3945:
case 1536:
case 1452:
case 2192:
case 56:
case 2504:
case 196:
case 1563:
case 1984:
case 1766:
case 3982:
case 1641:
case 3744:
case 1038:
case 1733:
case 3258:
case 3705:
case 1675:
case 955:
case 4025:
case 1001:
case 833:
case 663:
case 3236:
case 1056:
case 2920:
case 102:
case 1181:
case 3263:
case 1322:
case 2842:
case 3324:
case 2613:
case 2377:
case 2440:
case 1218:
case 681:
case 337:
case 3355:
case 1361:
case 887:
case 361:
case 1172:
case 3101:
case 3174:
case 787:
case 4012:
case 2837:
case 2885:
case 383:
case 2127:
case 2547:
case 3943:
case 598:
case 2249:
case 2951:
case 3368:
case 3140:
case 3598:
case 3932:
case 2721:
case 3096:
case 1313:
case 4027:
case 1783:
case 614:
case 2661:
case 2401:
case 1317:
case 3703:
case 1359:
case 2278:
case 1787:
case 2532:
case 3008:
case 1196:
case 34:
case 2998:
case 3211:
case 1565:
case 2014:
case 1040:
case 235:
case 1862:
case 4092:
case 439:
case 2615:
case 3770:
case 1460:
case 3265:
case 2234:
case 473:
case 1846:
case 388:
case 3648:
case 2125:
case 677:
case 2887:
case 1949:
case 180:
case 871:
case 124:
case 3286:
case 1298:
case 1131:
case 507:
case 2693:
case 738:
case 908:
case 3890:
case 1709:
case 3353:
case 2189:
case 2973:
case 257:
case 3577:
case 3280:
case 2009:
case 2524:
case 3896:
case 1437:
case 94:
case 3999:
case 4044:
case 2293:
case 4005:
case 628:
case 1888:
case 1606:
case 63:
case 3808:
case 3444:
case 3776:
case 1433:
case 2634:
case 3405:
case 2369:
case 2297:
case 3754:
case 1922:
case 3924:
case 1200:
case 1840:
case 3573:
case 2215:
case 397:
case 533:
case 2852:
case 1384:
case 3611:
case 1993:
case 308:
case 749:
case 579:
case 3712:
case 2087:
case 3831:
case 3064:
case 2261:
case 310:
case 2678:
case 587:
case 448:
case 2318:
case 3146:
case 1915:
case 1579:
case 1580:
case 100:
case 2900:
case 969:
case 3371:
case 3090:
case 4003:
case 2295:
case 266:
case 240:
case 1483:
case 2684:
case 3667:
case 3407:
case 3526:
case 2217:
case 2519:
case 295:
case 2829:
case 2553:
case 499:
case 3919:
case 3575:
case 2926:
case 2860:
case 1618:
case 3230:
case 2774:
case 2446:
case 427:
case 1435:
case 3727:
case 623:
case 3658:
case 1959:
case 2738:
case 182:
case 961:
case 1241:
case 2033:
case 1801:
case 647:
case 1995:
case 2398:
case 601:
case 3872:
case 2042:
case 1729:
case 3470:
case 234:
case 1760:
case 3347:
case 2306:
case 3792:
case 741:
case 3343:
case 1620:
case 1334:
case 3968:
case 1409:
case 2144:
case 2085:
case 2037:
case 125:
case 1913:
case 151:
case 1226:
case 707:
case 937:
case 3259:
case 221:
case 3519:
case 3975:
case 4062:
case 436:
case 1490:
case 819:
case 1682:
case 3684:
case 2407:
case 366:
case 3894:
case 3421:
case 2723:
case 2636:
case 1645:
case 858:
case 2727:
case 2403:
case 4021:
case 1464:
case 418:
case 3774:
case 3446:
case 148:
case 1772:
case 758:
case 2230:
case 3462:
case 3602:
case 2957:
case 3860:
case 3213:
case 395:
case 3829:
case 2575:
case 2470:
case 1386:
case 2489:
case 2872:
case 926:
case 3398:
case 1005:
case 1044:
case 91:
case 1513:
case 1253:
case 522:
case 2010:
case 1827:
case 1517:
case 1133:
case 1559:
case 2332:
case 1166:
case 203:
case 1930:
case 3144:
case 3037:
case 2881:
case 3351:
case 3306:
case 2792:
case 853:
case 2686:
case 994:
case 776:
case 482:
case 3293:
case 143:
case 3009:
case 3524:
case 2577:
case 3973:
case 357:
case 3555:
case 3215:
case 632:
case 1561:
case 1070:
case 1109:
case 1391:
case 1089:
case 711:
case 3297:
case 1731:
case 1812:
case 3599:
case 425:
case 2665:
case 3320:
case 2444:
case 811:
case 1410:
case 2248:
case 2808:
case 210:
case 1876:
case 674:
case 1183:
case 1979:
case 2712:
case 1854:
case 3087:
case 1367:
case 2611:
case 1336:
case 690:
case 2345:
case 2304:
case 1363:
case 2439:
case 1428:
case 504:
case 1796:
case 2146:
case 127:
case 370:
case 1330:
case 1624:
case 2423:
case 4074:
case 2598:
case 1965:
case 2368:
case 2943:
case 3809:
case 3249:
case 1790:
case 1472:
case 2947:
case 3543:
case 3762:
case 2551:
case 1699:
case 24:
case 3998:
case 2008:
case 3532:
case 1012:
case 1764:
case 3401:
case 2864:
case 1243:
case 2031:
case 1054:
case 288:
case 1076:
case 3234:
case 2265:
case 269:
case 1416:
case 2770:
case 3326:
case 2357:
case 335:
case 1578:
case 496:
case 1152:
case 1911:
case 1807:
case 584:
case 1247:
case 2286:
case 1936:
case 1129:
case 553:
case 860:
case 1839:
case 2945:
case 2971:
case 156:
case 1963:
case 1584:
case 139:
case 3300:
case 2425:
case 3582:
case 576:
case 760:
case 2828:
case 3918:
case 1619:
case 1431:
case 2454:
case 2518:
case 1194:
case 606:
case 2258:
case 1502:
case 424:
case 2982:
case 3571:
case 3545:
case 2072:
case 237:
case 3613:
case 1991:
case 10:
case 2630:
case 1204:
case 2263:
case 1027:
case 1408:
case 3920:
case 3866:
case 3123:
case 1805:
case 1245:
case 675:
case 283:
case 65:
case 3127:
case 2081:
case 704:
case 212:
case 3284:
case 505:
case 2267:
case 2520:
case 326:
case 2569:
case 3695:
case 804:
case 4040:
case 1282:
case 261:
case 3659:
case 31:
case 3617:
case 3373:
case 2583:
case 1080:
case 3987:
case 150:
case 2964:
case 636:
case 1079:
case 2197:
case 1419:
case 3329:
case 3590:
case 2786:
case 3148:
case 2625:
case 486:
case 1392:
case 1743:
case 895:
case 542:
case 1048:
case 2765:
case 600:
case 2654:
case 1453:
case 1631:
case 872:
case 3983:
case 3000:
case 1907:
case 358:
case 594:
case 1546:
case 3394:
case 4017:
case 2430:
case 3262:
case 2099:
case 535:
case 4059:
case 734:
case 3413:
case 2711:
case 3640:
case 2055:
case 3073:
case 1865:
case 3246:
case 1264:
case 1886:
case 13:
case 384:
case 320:
case 3688:
case 2024:
case 2161:
case 1173:
case 2372:
case 207:
case 3417:
case 241:
case 4013:
case 3749:
case 1290:
case 2623:
case 1891:
case 1424:
case 613:
case 857:
case 1681:
case 2767:
case 757:
case 1782:
case 2910:
case 1944:
case 3130:
case 101:
case 2113:
case 3422:
case 3985:
case 2117:
case 293:
case 3702:
case 4022:
case 2566:
case 3510:
case 432:
case 3250:
case 3461:
case 3601:
case 1704:
case 2542:
case 1771:
case 2195:
case 651:
case 2736:
case 362:
case 3041:
case 2845:
case 1126:
case 445:
case 3497:
case 2448:
case 1550:
case 1863:
case 4093:
case 2244:
case 3075:
case 1325:
case 1616:
case 2692:
case 51:
case 4015:
case 2480:
case 490:
case 2479:
case 2331:
case 1354:
case 305:
case 2057:
case 526:
case 1867:
case 1141:
case 2791:
case 123:
case 3493:
case 911:
case 3158:
case 163:
case 1389:
case 770:
case 2486:
case 540:
case 1447:
case 1927:
case 870:
case 1556:
case 1432:
case 1216:
case 2981:
case 794:
case 976:
case 1830:
case 1501:
case 3572:
case 3434:
case 2605:
case 3191:
case 3238:
case 742:
case 3309:
case 2227:
case 2560:
case 1992:
case 2004:
case 2529:
case 2071:
case 835:
case 2045:
case 1768:
case 3841:
case 1036:
case 216:
case 2730:
case 905:
case 3713:
case 22:
case 4049:
case 3383:
case 1307:
case 534:
case 2639:
case 2082:
case 3717:
case 1303:
case 271:
case 2364:
case 3387:
case 696:
case 3795:
case 3163:
case 3136:
case 3929:
case 385:
case 2223:
case 1067:
case 1628:
case 3826:
case 4078:
case 1482:
case 1879:
case 1976:
case 430:
case 3111:
case 4002:
case 2931:
case 3722:
case 1880:
case 1724:
case 3621:
case 1:
case 3484:
case 1755:
case 624:
case 680:
case 1848:
case 1471:
case 189:
case 406:
case 2212:
case 2552:
case 3531:
case 1799:
case 3240:
case 3402:
case 3662:
case 920:
case 3337:
case 984:
case 2032:
case 2689:
case 233:
case 2899:
case 492:
case 1540:
case 475:
case 2458:
case 2043:
case 2514:
case 1198:
case 2748:
case 3873:
case 3051:
case 2855:
case 114:
case 2276:
case 3877:
case 81:
case 726:
case 3098:
case 2225:
case 2824:
case 3914:
case 3342:
case 304:
case 2491:
case 1086:
case 2047:
case 3793:
case 2134:
case 71:
case 2780:
case 1912:
case 826:
case 2908:
case 3333:
case 2779:
case 1588:
case 4036:
case 3467:
case 2484:
case 1683:
case 260:
case 246:
case 3178:
case 2621:
case 1893:
case 4063:
case 1350:
case 2952:
case 3931:
case 1049:
case 1525:
case 3149:
case 597:
case 1418:
case 2240:
case 2531:
case 3212:
case 3436:
case 3552:
case 1635:
case 3463:
case 1773:
case 2761:
case 2186:
case 667:
case 3276:
case 510:
case 837:
case 1034:
case 3855:
case 3514:
case 3254:
case 508:
case 463:
case 3458:
case 2006:
case 49:
case 907:
case 737:
case 3899:
case 481:
case 3996:
case 3670:
case 2715:
case 333:
case 2337:
case 1469:
case 812:
case 883:
case 761:
case 2366:
case 1132:
case 452:
case 1940:
case 2793:
case 3047:
case 2165:
case 783:
case 3134:
case 3824:
case 712:
case 631:
case 4058:
case 2098:
case 861:
case 2069:
case 1817:
case 1956:
case 521:
case 2020:
case 3292:
case 754:
case 1901:
case 3972:
case 414:
case 144:
case 1895:
case 4065:
case 1726:
case 2158:
case 993:
case 1685:
case 854:
case 15:
case 2238:
case 3465:
case 2434:
case 3605:
case 1633:
case 3644:
case 84:
case 1741:
case 3981:
case 1527:
case 57:
case 1260:
case 1229:
case 1813:
case 3411:
case 888:
case 32:
case 1002:
case 869:
case 656:
case 477:
case 2274:
case 3184:
case 3045:
case 673:
case 2875:
case 3529:
case 3390:
case 2256:
case 769:
case 2960:
case 3857:
case 1592:
case 2136:
case 106:
case 2795:
case 503:
case 3102:
case 3082:
case 3639:
case 949:
case 338:
case 3113:
case 253:
case 3239:
case 1059:
case 3910:
case 2820:
case 1017:
case 2784:
case 3767:
case 428:
case 276:
case 1477:
case 1095:
case 3736:
case 262:
case 3627:
case 729:
case 2656:
case 3195:
case 1473:
case 2601:
case 43:
case 3566:
case 797:
case 829:
case 1544:
case 2702:
case 1505:
case 211:
case 1388:
case 2985:
case 3159:
case 2937:
case 2818:
case 3928:
case 1629:
case 4080:
case 1802:
case 3053:
case 2075:
case 710:
case 1266:
case 3448:
case 1119:
case 971:
case 2638:
case 2041:
case 708:
case 1233:
case 349:
case 3205:
case 1157:
case 3758:
case 1539:
case 1153:
case 3791:
case 3057:
case 2026:
case 1884:
case 1950:
case 205:
case 648:
case 186:
case 3019:
case 916:
case 1769:
case 3882:
case 3479:
case 3692:
case 2148:
case 3316:
case 1093:
case 2329:
case 821:
case 174:
case 3786:
case 855:
case 415:
case 145:
case 1798:
case 721:
case 1338:
case 1849:
case 2987:
case 2935:
case 3964:
case 3583:
case 398:
case 1507:
case 1946:
case 1503:
case 3535:
case 1015:
case 3270:
case 77:
case 699:
case 3654:
case 1475:
case 3193:
case 2734:
case 1751:
case 1878:
case 87:
case 2778:
case 1287:
case 2806:
case 1570:
case 643:
case 569:
case 3612:
case 3055:
case 2851:
case 1061:
case 3711:
case 2640:
case 3122:
case 3099:
case 401:
case 987:
case 2262:
case 132:
case 2749:
case 1356:
case 341:
case 803:
case 4030:
case 1199:
case 979:
case 307:
case 2898:
case 2077:
case 933:
case 3207:
case 1155:
case 2688:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1769774402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,];
var gg_b = "1769774402/";

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
