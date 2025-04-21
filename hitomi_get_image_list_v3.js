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
case 715:
case 3632:
case 2136:
case 2603:
case 2907:
case 1643:
case 189:
case 2333:
case 2635:
case 638:
case 1345:
case 2929:
case 4051:
case 342:
case 3456:
case 1959:
case 3720:
case 542:
case 32:
case 936:
case 721:
case 2502:
case 2719:
case 1880:
case 597:
case 1591:
case 3505:
case 3258:
case 966:
case 3488:
case 2106:
case 214:
case 1160:
case 1343:
case 2937:
case 2809:
case 3332:
case 1013:
case 1146:
case 1968:
case 2479:
case 1645:
case 2335:
case 48:
case 397:
case 1775:
case 984:
case 558:
case 1854:
case 502:
case 268:
case 2751:
case 2934:
case 1721:
case 1865:
case 829:
case 1358:
case 302:
case 16:
case 3056:
case 1413:
case 469:
case 1911:
case 2628:
case 875:
case 2690:
case 1863:
case 1658:
case 1202:
case 1944:
case 1773:
case 1386:
case 3528:
case 995:
case 3881:
case 2074:
case 1364:
case 587:
case 1778:
case 3523:
case 540:
case 3267:
case 4014:
case 376:
case 1355:
case 2909:
case 576:
case 2325:
case 3446:
case 2197:
case 1949:
case 387:
case 2371:
case 49:
case 1061:
case 2623:
case 3322:
case 3810:
case 1653:
case 2939:
case 343:
case 215:
case 2126:
case 3622:
case 1353:
case 2829:
case 112:
case 2323:
case 3525:
case 1216:
case 3248:
case 1664:
case 2522:
case 3730:
case 543:
case 1552:
case 3571:
case 837:
case 1811:
case 300:
case 621:
case 2638:
case 3113:
case 3060:
case 1018:
case 2308:
case 2714:
case 738:
case 2474:
case 2804:
case 985:
case 3795:
case 1954:
case 3508:
case 2924:
case 3793:
case 3255:
case 3485:
case 2834:
case 1222:
case 2482:
case 2112:
case 1965:
case 2608:
case 1750:
case 2798:
case 3532:
case 1094:
case 22:
case 2535:
case 3839:
case 1391:
case 3199:
case 3333:
case 1342:
case 2632:
case 3907:
case 242:
case 2456:
case 2286:
case 1177:
case 3929:
case 1426:
case 3809:
case 491:
case 2332:
case 1497:
case 314:
case 3827:
case 956:
case 297:
case 2910:
case 3605:
case 776:
case 3502:
case 2533:
case 602:
case 1228:
case 568:
case 4020:
case 1412:
case 1862:
case 1026:
case 258:
case 3390:
case 202:
case 2243:
case 1203:
case 3824:
case 3934:
case 1182:
case 368:
case 697:
case 1772:
case 3242:
case 1784:
case 459:
case 2590:
case 3904:
case 338:
case 2245:
case 2528:
case 1097:
case 2161:
case 3079:
case 3837:
case 797:
case 2446:
case 3909:
case 2322:
case 1789:
case 4095:
case 3927:
case 603:
case 3074:
case 1238:
case 1740:
case 2700:
case 2523:
case 1766:
case 2267:
case 2248:
case 1555:
case 515:
case 600:
case 3270:
case 2525:
case 1208:
case 2085:
case 3522:
case 2730:
case 3082:
case 3996:
case 3807:
case 3625:
case 4093:
case 3939:
case 1652:
case 3323:
case 315:
case 3126:
case 2622:
case 3792:
case 949:
case 3741:
case 2483:
case 2253:
case 1567:
case 1223:
case 3804:
case 2981:
case 2060:
case 2316:
case 1370:
case 104:
case 200:
case 3638:
case 2046:
case 4000:
case 406:
case 2264:
case 3338:
case 1036:
case 758:
case 203:
case 4030:
case 2115:
case 676:
case 3924:
case 2485:
case 1548:
case 687:
case 917:
case 3482:
case 3252:
case 3194:
case 3834:
case 332:
case 3356:
case 2090:
case 1851:
case 2028:
case 1445:
case 648:
case 2588:
case 625:
case 2754:
case 2433:
case 3402:
case 2875:
case 409:
case 970:
case 3579:
case 890:
case 981:
case 611:
case 2765:
case 532:
case 1597:
case 1526:
case 155:
case 1086:
case 3388:
case 252:
case 2556:
case 3164:
case 1122:
case 4057:
case 2435:
case 2294:
case 3656:
case 2152:
case 362:
case 1069:
case 2873:
case 1941:
case 679:
case 3155:
case 3887:
case 724:
case 279:
case 2297:
case 652:
case 608:
case 1045:
case 1458:
case 1315:
case 3850:
case 1613:
case 1917:
case 3002:
case 1594:
case 14:
case 1469:
case 7:
case 1116:
case 2170:
case 1819:
case 1313:
case 3148:
case 122:
case 2757:
case 3989:
case 1512:
case 1814:
case 752:
case 253:
case 883:
case 2973:
case 4068:
case 1132:
case 330:
case 1048:
case 3984:
case 2425:
case 2008:
case 1841:
case 1318:
case 3360:
case 1285:
case 4059:
case 2423:
case 3972:
case 2377:
case 1283:
case 1453:
case 1067:
case 1102:
case 2831:
case 1618:
case 2975:
case 3660:
case 2038:
case 533:
case 3261:
case 1506:
case 2560:
case 250:
case 991:
case 1361:
case 31:
case 3840:
case 711:
case 2878:
case 2408:
case 650:
case 2:
case 1055:
case 1448:
case 2025:
case 3889:
case 3383:
case 3776:
case 4044:
case 1737:
case 748:
case 2374:
case 725:
case 2299:
case 123:
case 1729:
case 3987:
case 2759:
case 1260:
case 3218:
case 1707:
case 120:
case 1053:
case 1467:
case 1661:
case 3158:
case 959:
case 3950:
case 1817:
case 3574:
case 2688:
case 2579:
case 2762:
case 2213:
case 3765:
case 760:
case 135:
case 3028:
case 2872:
case 3588:
case 232:
case 733:
case 3679:
case 3090:
case 3875:
case 3931:
case 1442:
case 1993:
case 2402:
case 763:
case 1626:
case 3435:
case 2884:
case 3901:
case 2432:
case 3763:
case 2215:
case 2388:
case 3212:
case 4062:
case 485:
case 3005:
case 2167:
case 1930:
case 1091:
case 1820:
case 2002:
case 1898:
case 1042:
case 1138:
case 1394:
case 2887:
case 662:
case 3297:
case 1513:
case 632:
case 511:
case 1694:
case 1515:
case 325:
case 348:
case 2940:
case 196:
case 1900:
case 3978:
case 3003:
case 3780:
case 2032:
case 525:
case 548:
case 1612:
case 71:
case 4076:
case 1452:
case 3677:
case 3744:
case 436:
case 2422:
case 3008:
case 762:
case 1070:
case 2016:
case 2346:
case 1636:
case 2984:
case 101:
case 353:
case 61:
case 3546:
case 1518:
case 3560:
case 2145:
case 466:
case 3423:
case 2972:
case 1336:
case 2646:
case 3142:
case 3038:
case 1274:
case 233:
case 1893:
case 1606:
case 3831:
case 1133:
case 2660:
case 3682:
case 5:
case 2889:
case 2383:
case 1277:
case 3299:
case 2685:
case 939:
case 3236:
case 2866:
case 2022:
case 3878:
case 1800:
case 186:
case 3071:
case 2840:
case 3585:
case 484:
case 3025:
case 3:
case 2416:
case 524:
case 1830:
case 3583:
case 495:
case 1128:
case 2574:
case 1998:
case 1561:
case 2987:
case 3382:
case 3747:
case 3674:
case 663:
case 324:
case 3206:
case 448:
case 425:
case 3551:
case 594:
case 1220:
case 903:
case 2480:
case 2250:
case 2651:
case 278:
case 1427:
case 217:
case 1621:
case 2063:
case 4035:
case 1373:
case 2287:
case 2457:
case 2918:
case 3897:
case 1409:
case 3906:
case 4003:
case 2449:
case 3129:
case 1977:
case 1673:
case 2351:
case 385:
case 4005:
case 3107:
case 3936:
case 3999:
case 1496:
case 4033:
case 2065:
case 2728:
case 1758:
case 865:
case 585:
case 1584:
case 2463:
case 1027:
case 2961:
case 2049:
case 3698:
case 2319:
case 2272:
case 408:
case 452:
case 2703:
case 3732:
case 3275:
case 1974:
case 3273:
case 2705:
case 3134:
case 678:
case 2454:
case 3519:
case 2284:
case 940:
case 4090:
case 3398:
case 2465:
case 3812:
case 3926:
case 2459:
case 2289:
case 4023:
case 3393:
case 3196:
case 1200:
case 1034:
case 1767:
case 126:
case 3592:
case 595:
case 1004:
case 584:
case 2314:
case 2044:
case 1748:
case 864:
case 656:
case 3127:
case 4071:
case 3109:
case 1437:
case 2392:
case 4025:
case 3997:
case 384:
case 2818:
case 2723:
case 2500:
case 1434:
case 256:
case 1540:
case 997:
case 841:
case 3124:
case 1162:
case 2059:
case 2915:
case 1678:
case 366:
case 709:
case 818:
case 1029:
case 3912:
case 1007:
case 336:
case 2861:
case 3300:
case 1378:
case 2617:
case 1764:
case 4008:
case 2181:
case 2444:
case 2771:
case 3517:
case 2725:
case 536:
case 3231:
case 317:
case 784:
case 3287:
case 1672:
case 378:
case 3110:
case 4032:
case 1946:
case 3449:
case 190:
case 2137:
case 1960:
case 578:
case 517:
case 549:
case 80:
case 1573:
case 285:
case 855:
case 2129:
case 4002:
case 193:
case 3065:
case 685:
case 3598:
case 3703:
case 462:
case 3463:
case 3057:
case 2698:
case 1111:
case 3319:
case 921:
case 1650:
case 736:
case 3815:
case 2812:
case 2398:
case 3465:
case 1350:
case 2894:
case 84:
case 509:
case 694:
case 1985:
case 3454:
case 3733:
case 1791:
case 2702:
case 636:
case 1956:
case 2695:
case 192:
case 295:
case 785:
case 2836:
case 3641:
case 2393:
case 183:
case 4022:
case 2127:
case 41:
case 2476:
case 794:
case 3341:
case 2806:
case 2997:
case 284:
case 2693:
case 1860:
case 854:
case 2109:
case 3011:
case 3392:
case 3708:
case 1217:
case 2330:
case 1666:
case 3059:
case 823:
case 1165:
case 2912:
case 1689:
case 3723:
case 2994:
case 1578:
case 3500:
case 2124:
case 1885:
case 1241:
case 695:
case 2722:
case 3530:
case 1883:
case 1366:
case 3068:
case 1010:
case 2076:
case 3861:
case 107:
case 1340:
case 2630:
case 3411:
case 463:
case 3913:
case 820:
case 1713:
case 2380:
case 2964:
case 828:
case 438:
case 2349:
case 269:
case 3224:
case 3101:
case 1696:
case 2955:
case 2019:
case 1803:
case 1473:
case 2357:
case 4079:
case 3952:
case 1609:
case 1475:
case 3098:
case 2649:
case 1193:
case 1339:
case 3131:
case 1833:
case 3580:
case 2845:
case 2451:
case 2281:
case 1805:
case 2953:
case 1421:
case 2680:
case 1715:
case 3557:
case 2665:
case 79:
case 1908:
case 391:
case 1100:
case 3788:
case 116:
case 28:
case 2363:
case 3565:
case 960:
case 3296:
case 2562:
case 2886:
case 805:
case 2779:
case 591:
case 188:
case 1324:
case 3209:
case 963:
case 2354:
case 727:
case 669:
case 3563:
case 3227:
case 3756:
case 3420:
case 572:
case 2365:
case 1075:
case 1581:
case 2858:
case 2967:
case 3362:
case 2051:
case 3991:
case 2347:
case 1637:
case 1307:
case 2017:
case 3493:
case 2359:
case 3676:
case 2668:
case 1905:
case 3030:
case 1823:
case 2782:
case 844:
case 3568:
case 1510:
case 2864:
case 3547:
case 506:
case 3559:
case 2414:
case 1761:
case 1607:
case 2855:
case 2441:
case 2184:
case 2774:
case 2943:
case 1825:
case 2647:
case 1629:
case 3173:
case 3495:
case 3234:
case 2659:
case 1078:
case 3376:
case 2368:
case 804:
case 3237:
case 3511:
case 421:
case 373:
case 831:
case 2210:
case 4082:
case 1334:
case 1276:
case 2777:
case 2187:
case 1604:
case 2417:
case 3093:
case 1031:
case 2611:
case 3430:
case 415:
case 3544:
case 2867:
case 1990:
case 2092:
case 381:
case 1001:
case 0:
case 1808:
case 78:
case 2041:
case 1478:
case 2969:
case 1718:
case 4074:
case 861:
case 3746:
case 2014:
case 3229:
case 198:
case 1304:
case 581:
case 2224:
case 1832:
case 3019:
case 3349:
case 1254:
case 369:
case 3843:
case 924:
case 3357:
case 672:
case 1922:
case 1596:
case 1539:
case 1265:
case 3380:
case 813:
case 4088:
case 1509:
case 2557:
case 1527:
case 539:
case 1087:
case 3649:
case 2131:
case 1802:
case 2891:
case 2098:
case 3657:
case 3845:
case 458:
case 1797:
case 129:
case 58:
case 3189:
case 770:
case 3562:
case 3779:
case 1084:
case 3948:
case 291:
case 2970:
case 2554:
case 3419:
case 497:
case 2788:
case 38:
case 2662:
case 781:
case 1280:
case 3365:
case 953:
case 1450:
case 659:
case 2362:
case 3051:
case 1072:
case 3663:
case 3967:
case 3354:
case 2209:
case 773:
case 1487:
case 1257:
case 2756:
case 42:
case 2563:
case 1726:
case 2227:
case 1211:
case 2568:
case 646:
case 2942:
case 403:
case 2991:
case 3347:
case 670:
case 167:
case 2121:
case 3359:
case 1151:
case 3172:
case 3647:
case 979:
case 4046:
case 400:
case 3855:
case 3441:
case 3184:
case 1932:
case 2495:
case 1822:
case 3659:
case 2000:
case 2783:
case 2376:
case 137:
case 2173:
case 2547:
case 899:
case 1507:
case 3864:
case 2559:
case 3414:
case 759:
case 812:
case 443:
case 3611:
case 527:
case 1504:
case 908:
case 2544:
case 772:
case 1736:
case 3777:
case 59:
case 270:
case 2746:
case 1247:
case 2760:
case 2207:
case 3344:
case 3986:
case 1489:
case 1816:
case 3041:
case 1119:
case 851:
case 3848:
case 1440:
case 246:
case 791:
case 2400:
case 2095:
case 1466:
case 3969:
case 487:
case 1792:
case 699:
case 531:
case 612:
case 982:
case 3223:
case 504:
case 2018:
case 3370:
case 1308:
case 304:
case 2811:
case 873:
case 331:
case 1714:
case 361:
case 2648:
case 870:
case 3099:
case 2965:
case 1608:
case 3962:
case 881:
case 990:
case 3548:
case 2731:
case 2954:
case 3225:
case 2570:
case 457:
case 3271:
case 1252:
case 1194:
case 561:
case 2222:
case 1837:
case 1197:
case 2949:
case 2418:
case 651:
case 710:
case 3179:
case 1371:
case 2061:
case 2980:
case 3238:
case 1074:
case 2364:
case 3740:
case 544:
case 3553:
case 3766:
case 2664:
case 3208:
case 806:
case 1522:
case 1082:
case 2655:
case 1807:
case 4031:
case 1625:
case 3436:
case 212:
case 3652:
case 789:
case 2859:
case 1126:
case 2865:
case 3586:
case 1328:
case 2669:
case 1390:
case 2415:
case 2185:
case 2854:
case 3203:
case 610:
case 980:
case 2775:
case 751:
case 3182:
case 3494:
case 3235:
case 1291:
case 983:
case 3233:
case 919:
case 689:
case 1904:
case 992:
case 2944:
case 2386:
case 3097:
case 2413:
case 2369:
case 1690:
case 1079:
case 2658:
case 2863:
case 23:
case 1628:
case 3543:
case 3094:
case 63:
case 907:
case 1839:
case 859:
case 3391:
case 2947:
case 289:
case 2643:
case 1136:
case 1907:
case 1305:
case 2015:
case 2959:
case 3787:
case 2345:
case 1635:
case 3177:
case 3426:
case 1929:
case 328:
case 3497:
case 2013:
case 1303:
case 1106:
case 114:
case 2849:
case 3691:
case 2343:
case 1335:
case 1827:
case 2645:
case 1605:
case 3976:
case 1502:
case 3545:
case 488:
case 3228:
case 3811:
case 231:
case 3348:
case 1046:
case 1316:
case 2370:
case 2006:
case 204:
case 3667:
case 437:
case 4066:
case 1538:
case 2567:
case 4089:
case 1253:
case 1795:
case 3954:
case 2225:
case 3570:
case 75:
case 351:
case 1255:
case 3731:
case 644:
case 2271:
case 1616:
case 2099:
case 2670:
case 3965:
case 103:
case 3648:
case 2036:
case 2962:
case 3367:
case 2238:
case 474:
case 3778:
case 1700:
case 1523:
case 3188:
case 2553:
case 176:
case 3355:
case 1460:
case 3418:
case 244:
case 1446:
case 187:
case 3061:
case 2876:
case 1322:
case 3868:
case 1810:
case 3957:
case 3655:
case 2499:
case 143:
case 2564:
case 3353:
case 2208:
case 1525:
case 604:
case 631:
case 1730:
case 3552:
case 3775:
case 3232:
case 1243:
case 56:
case 4087:
case 2235:
case 2182:
case 3686:
case 3721:
case 3865:
case 3358:
case 1056:
case 36:
case 761:
case 3911:
case 731:
case 3369:
case 3863:
case 3658:
case 704:
case 33:
case 926:
case 2784:
case 2233:
case 1088:
case 3944:
case 3386:
case 3773:
case 1528:
case 1590:
case 3183:
case 2558:
case 1632:
case 2342:
case 1302:
case 313:
case 3947:
case 3643:
case 3345:
case 2177:
case 3015:
case 1456:
case 2787:
case 1286:
case 1720:
case 869:
case 2543:
case 1798:
case 475:
case 1535:
case 12:
case 589:
case 839:
case 3591:
case 2228:
case 1505:
case 1488:
case 3849:
case 3160:
case 2497:
case 3146:
case 1332:
case 4084:
case 1910:
case 65:
case 1682:
case 377:
case 3277:
case 541:
case 1299:
case 586:
case 2064:
case 1236:
case 2737:
case 1374:
case 1878:
case 3800:
case 1071:
case 3052:
case 654:
case 1025:
case 341:
case 74:
case 1408:
case 2055:
case 1023:
case 3830:
case 2053:
case 3128:
case 2817:
case 1438:
case 3561:
case 836:
case 1382:
case 4034:
case 2729:
case 2246:
case 1674:
case 220:
case 2260:
case 124:
case 3452:
case 1973:
case 1677:
case 3135:
case 975:
case 334:
case 2841:
case 4037:
case 3306:
case 3699:
case 2285:
case 2318:
case 3636:
case 2132:
case 1801:
case 1425:
case 301:
case 895:
case 534:
case 2814:
case 2464:
case 1711:
case 2599:
case 755:
case 564:
case 150:
case 254:
case 1560:
case 884:
case 2283:
case 2734:
case 1423:
case 1142:
case 3336:
case 1038:
case 3893:
case 364:
case 3606:
case 929:
case 1975:
case 623:
case 1490:
case 1428:
case 3820:
case 3898:
case 2917:
case 2613:
case 3042:
case 720:
case 937:
case 2739:
case 3513:
case 967:
case 222:
case 2486:
case 723:
case 3694:
case 1226:
case 2727:
case 148:
case 1749:
case 2512:
case 2709:
case 596:
case 3900:
case 2469:
case 111:
case 1003:
case 2116:
case 2043:
case 3108:
case 64:
case 2597:
case 335:
case 3326:
case 1028:
case 1588:
case 1679:
case 1821:
case 1405:
case 622:
case 1875:
case 2724:
case 3993:
case 974:
case 1152:
case 4027:
case 2069:
case 2122:
case 3626:
case 1294:
case 1435:
case 2443:
case 1901:
case 2941:
case 1556:
case 152:
case 255:
case 2526:
case 885:
case 3361:
case 286:
case 1169:
case 1840:
case 11:
case 856:
case 2470:
case 480:
case 3919:
case 3448:
case 796:
case 241:
case 1889:
case 1776:
case 2277:
case 1383:
case 3729:
case 2561:
case 1683:
case 1987:
case 1385:
case 3707:
case 3246:
case 320:
case 2128:
case 2190:
case 492:
case 2830:
case 419:
case 1950:
case 2998:
case 3536:
case 3599:
case 407:
case 2135:
case 2895:
case 3132:
case 1984:
case 3048:
case 2103:
case 2070:
case 2699:
case 1016:
case 1143:
case 3285:
case 3318:
case 1360:
case 1972:
case 677:
case 554:
case 618:
case 3067:
case 264:
case 3102:
case 3618:
case 1646:
case 2336:
case 735:
case 2274:
case 1261:
case 354:
case 641:
case 2279:
case 3739:
case 2513:
case 3796:
case 2930:
case 2898:
case 3917:
case 1850:
case 2138:
case 2312:
case 493:
case 2820:
case 3615:
case 296:
case 2612:
case 3043:
case 3819:
case 3313:
case 1032:
case 1148:
case 2694:
case 3727:
case 3486:
case 3512:
case 718:
case 54:
case 1356:
case 132:
case 3058:
case 764:
case 1872:
case 3445:
case 1402:
case 2993:
case 2442:
case 2697:
case 1579:
case 817:
case 696:
case 878:
case 355:
case 3526:
case 50:
case 849:
case 265:
case 162:
case 1656:
case 2171:
case 734:
case 3069:
case 2125:
case 3941:
case 2397:
case 3443:
case 555:
case 3992:
case 1884:
case 4067:
case 2029:
case 2162:
case 3666:
case 2678:
case 1317:
case 2007:
case 1047:
case 2434:
case 2295:
case 2753:
case 3689:
case 156:
case 1723:
case 2882:
case 3578:
case 1500:
case 3292:
case 3885:
case 3241:
case 3752:
case 3883:
case 945:
case 507:
case 3366:
case 1068:
case 2378:
case 307:
case 1411:
case 1617:
case 583:
case 226:
case 519:
case 1614:
case 1595:
case 2200:
case 2034:
case 1266:
case 3501:
case 392:
case 1459:
case 1289:
case 1692:
case 1447:
case 1641:
case 2407:
case 319:
case 571:
case 2979:
case 95:
case 2631:
case 1341:
case 3149:
case 1818:
case 380:
case 4055:
case 3846:
case 2301:
case 2437:
case 1044:
case 2004:
case 2230:
case 1314:
case 833:
case 371:
case 77:
case 3481:
case 3144:
case 1598:
case 2550:
case 1080:
case 1703:
case 1520:
case 1463:
case 3111:
case 2009:
case 3650:
case 67:
case 109:
case 2096:
case 1619:
case 2745:
case 3387:
case 1705:
case 3742:
case 3985:
case 1733:
case 3791:
case 1063:
case 2373:
case 1457:
case 2176:
case 3672:
case 178:
case 1110:
case 3946:
case 3384:
case 3960:
case 4043:
case 3081:
case 2572:
case 3888:
case 2769:
case 590:
case 961:
case 1250:
case 3575:
case 2220:
case 1790:
case 1728:
case 1054:
case 904:
case 931:
case 2024:
case 1351:
case 4045:
case 2321:
case 382:
case 2673:
case 2977:
case 393:
case 1065:
case 149:
case 2439:
case 3566:
case 3882:
case 647:
case 1994:
case 3434:
case 3753:
case 2689:
case 3540:
case 2885:
case 2241:
case 8:
case 2292:
case 1201:
case 1124:
case 3162:
case 2666:
case 3029:
case 1330:
case 464:
case 671:
case 3007:
case 136:
case 207:
case 1630:
case 2340:
case 2366:
case 1300:
case 3378:
case 401:
case 4070:
case 3037:
case 434:
case 1722:
case 692:
case 3404:
case 2752:
case 1517:
case 3874:
case 913:
case 1231:
case 989:
case 3429:
case 195:
case 1695:
case 1514:
case 292:
case 2956:
case 793:
case 782:
case 3331:
case 1393:
case 1139:
case 3407:
case 1899:
case 219:
case 1196:
case 1278:
case 3767:
case 93:
case 607:
case 1541:
case 1592:
case 3004:
case 96:
case 418:
case 477:
case 1716:
case 271:
case 2180:
case 1127:
case 2410:
case 4052:
case 486:
case 3979:
case 1476:
case 2157:
case 790:
case 247:
case 280:
case 2846:
case 3301:
case 850:
case 3437:
case 1693:
case 465:
case 707:
case 2111:
case 2251:
case 2481:
case 2983:
case 2687:
case 1221:
case 1275:
case 3550:
case 2387:
case 1273:
case 1894:
case 3982:
case 690:
case 2742:
case 2985:
case 825:
case 1398:
case 3039:
case 1320:
case 37:
case 3572:
case 2888:
case 3769:
case 2081:
case 2575:
case 2672:
case 3879:
case 3373:
case 1137:
case 194:
case 3409:
case 1906:
case 57:
case 951:
case 2946:
case 290:
case 808:
case 282:
case 1129:
case 2856:
case 3673:
case 2372:
case 1826:
case 185:
case 1107:
case 1936:
case 2684:
case 2147:
case 3375:
case 293:
case 4091:
case 3024:
case 3584:
case 2198:
case 1417:
case 499:
case 3504:
case 412:
case 2928:
case 800:
case 3799:
case 1187:
case 127:
case 2604:
case 3268:
case 1210:
case 1777:
case 2276:
case 788:
case 3247:
case 2718:
case 3706:
case 374:
case 935:
case 3259:
case 1344:
case 2634:
case 1041:
case 1311:
case 1848:
case 3440:
case 657:
case 19:
case 1969:
case 3211:
case 451:
case 3537:
case 567:
case 257:
case 887:
case 1576:
case 2307:
case 2431:
case 2637:
case 3902:
case 2329:
case 367:
case 698:
case 1945:
case 1782:
case 1359:
case 3151:
case 1172:
case 3610:
case 1853:
case 2905:
case 1492:
case 1943:
case 4018:
case 2607:
case 1855:
case 1441:
case 3040:
case 2629:
case 537:
case 843:
case 3507:
case 1864:
case 3797:
case 2624:
case 329:
case 1654:
case 1189:
case 288:
case 3381:
case 1886:
case 1562:
case 1779:
case 3084:
case 4013:
case 410:
case 3524:
case 1665:
case 3916:
case 1419:
case 529:
case 216:
case 1869:
case 2073:
case 1140:
case 1166:
case 2100:
case 3280:
case 2938:
case 3117:
case 4015:
case 1051:
case 2581:
case 1663:
case 3249:
case 3681:
case 3726:
case 1019:
case 1955:
case 3254:
case 169:
case 2925:
case 2971:
case 1964:
case 3539:
case 842:
case 757:
case 941:
case 1680:
case 616:
case 3527:
case 2715:
case 3087:
case 2193:
case 1649:
case 2833:
case 3050:
case 2609:
case 2396:
case 2475:
case 1953:
case 977:
case 46:
case 688:
case 1451:
case 3472:
case 775:
case 1237:
case 2736:
case 1511:
case 3334:
case 3276:
case 90:
case 1093:
case 3198:
case 3838:
case 955:
case 1430:
case 3990:
case 2119:
case 444:
case 3001:
case 2816:
case 598:
case 1870:
case 3478:
case 1095:
case 2466:
case 146:
case 2534:
case 1760:
case 1207:
case 274:
case 2247:
case 1746:
case 729:
case 1229:
case 3304:
case 398:
case 2259:
case 3634:
case 2489:
case 1175:
case 3637:
case 3933:
case 2902:
case 4036:
case 461:
case 3431:
case 674:
case 2244:
case 1676:
case 3905:
case 3329:
case 1030:
case 922:
case 2537:
case 94:
case 1568:
case 2507:
case 2529:
case 3903:
case 821:
case 404:
case 4006:
case 3825:
case 3401:
case 3871:
case 2040:
case 3629:
case 1852:
case 237:
case 3935:
case 3078:
case 1000:
case 1783:
case 588:
case 3908:
case 2916:
case 1554:
case 2524:
case 3100:
case 1788:
case 316:
case 3073:
case 868:
case 229:
case 1565:
case 516:
case 1239:
case 2797:
case 3624:
case 774:
case 388:
case 2381:
case 1209:
case 2249:
case 2681:
case 275:
case 2726:
case 4094:
case 2487:
case 2117:
case 3075:
case 3581:
case 428:
case 445:
case 838:
case 3021:
case 2265:
case 159:
case 2596:
case 2114:
case 3639:
case 2141:
case 2832:
case 3696:
case 3473:
case 3327:
case 3195:
case 1952:
case 2050:
case 3609:
case 3396:
case 1098:
case 1131:
case 2802:
case 3833:
case 1891:
case 3627:
case 3923:
case 2472:
case 2794:
case 405:
case 3805:
case 1549:
case 2527:
case 45:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745276401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,];
var gg_b = "1745276401/";

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
