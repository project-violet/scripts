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
case 2685:
case 3577:
case 3540:
case 3107:
case 2140:
case 3914:
case 1392:
case 1285:
case 2121:
case 3786:
case 1337:
case 2179:
case 3521:
case 760:
case 3408:
case 3156:
case 3682:
case 2556:
case 2478:
case 198:
case 855:
case 3109:
case 2509:
case 2807:
case 2291:
case 1444:
case 3877:
case 1691:
case 885:
case 2809:
case 3381:
case 578:
case 479:
case 1634:
case 3712:
case 234:
case 127:
case 3968:
case 62:
case 3862:
case 2019:
case 3910:
case 2715:
case 1479:
case 1421:
case 1651:
case 36:
case 3165:
case 1027:
case 1243:
case 1440:
case 4015:
case 2373:
case 889:
case 1029:
case 3303:
case 519:
case 418:
case 2643:
case 2162:
case 1708:
case 699:
case 3960:
case 1122:
case 2024:
case 3281:
case 1525:
case 2461:
case 783:
case 2067:
case 455:
case 1093:
case 2391:
case 2815:
case 143:
case 2330:
case 3036:
case 1448:
case 1014:
case 1149:
case 4065:
case 879:
case 3115:
case 3744:
case 1292:
case 989:
case 1170:
case 308:
case 1825:
case 1239:
case 2796:
case 753:
case 3400:
case 1673:
case 2041:
case 383:
case 2273:
case 3927:
case 459:
case 1053:
case 3886:
case 558:
case 3929:
case 2020:
case 1412:
case 2148:
case 353:
case 213:
case 3002:
case 1174:
case 3655:
case 1504:
case 818:
case 1068:
case 3942:
case 2709:
case 532:
case 2005:
case 2756:
case 489:
case 1010:
case 3586:
case 3779:
case 2422:
case 344:
case 37:
case 1181:
case 2837:
case 3222:
case 292:
case 2998:
case 2166:
case 465:
case 3566:
case 1625:
case 1455:
case 2892:
case 3612:
case 1356:
case 1959:
case 3595:
case 2195:
case 1309:
case 1906:
case 191:
case 3023:
case 1957:
case 2200:
case 2615:
case 763:
case 4043:
case 3438:
case 3192:
case 1600:
case 3270:
case 1573:
case 1538:
case 1791:
case 411:
case 1103:
case 907:
case 1495:
case 306:
case 363:
case 2204:
case 1604:
case 3274:
case 2785:
case 3980:
case 3555:
case 1873:
case 2089:
case 2552:
case 2087:
case 154:
case 770:
case 2481:
case 3755:
case 1891:
case 2076:
case 1315:
case 3185:
case 3059:
case 2300:
case 3347:
case 3057:
case 2182:
case 2426:
case 1530:
case 416:
case 3451:
case 717:
case 2609:
case 3946:
case 1256:
case 2325:
case 2885:
case 75:
case 140:
case 594:
case 3322:
case 4052:
case 3434:
case 3988:
case 1534:
case 2990:
case 38:
case 3795:
case 257:
case 811:
case 317:
case 2116:
case 350:
case 581:
case 3516:
case 1080:
case 2737:
case 3491:
case 701:
case 576:
case 3097:
case 2954:
case 3361:
case 869:
case 3644:
case 916:
case 3816:
case 1265:
case 380:
case 4037:
case 633:
case 3430:
case 3278:
case 21:
case 287:
case 35:
case 4039:
case 196:
case 3662:
case 4092:
case 3766:
case 3241:
case 1951:
case 591:
case 1446:
case 3073:
case 1301:
case 3038:
case 2943:
case 933:
case 2854:
case 2531:
case 3131:
case 3220:
case 402:
case 1759:
case 3916:
case 3319:
case 1706:
case 616:
case 2590:
case 447:
case 1187:
case 739:
case 186:
case 3317:
case 1675:
case 3205:
case 3784:
case 2275:
case 3154:
case 1345:
case 2831:
case 3269:
case 2850:
case 3113:
case 2513:
case 2487:
case 2081:
case 1823:
case 2894:
case 3588:
case 79:
case 4063:
case 3693:
case 1066:
case 554:
case 433:
case 1095:
case 346:
case 2236:
case 823:
case 339:
case 2813:
case 704:
case 902:
case 1732:
case 1797:
case 3328:
case 168:
case 735:
case 3194:
case 3982:
case 1930:
case 2594:
case 4058:
case 790:
case 2375:
case 1016:
case 1532:
case 1245:
case 3955:
case 729:
case 1723:
case 2952:
case 194:
case 3:
case 540:
case 1597:
case 3642:
case 2563:
case 3627:
case 3457:
case 1899:
case 10:
case 3320:
case 3880:
case 665:
case 2713:
case 1938:
case 1484:
case 2476:
case 54:
case 3671:
case 1201:
case 1897:
case 607:
case 2601:
case 3788:
case 712:
case 341:
case 2558:
case 3995:
case 2790:
case 238:
case 151:
case 3228:
case 7:
case 833:
case 4031:
case 3584:
case 1082:
case 3030:
case 2336:
case 741:
case 312:
case 252:
case 3497:
case 3660:
case 3367:
case 2683:
case 2598:
case 1480:
case 2731:
case 3198:
case 3884:
case 2299:
case 685:
case 3680:
case 1632:
case 393:
case 1354:
case 1699:
case 2545:
case 3145:
case 3714:
case 3864:
case 1119:
case 3389:
case 1044:
case 1460:
case 3871:
case 3829:
case 2142:
case 2663:
case 178:
case 3527:
case 249:
case 1331:
case 3008:
case 2127:
case 2033:
case 2078:
case 236:
case 2129:
case 3793:
case 3948:
case 1062:
case 2658:
case 3564:
case 2501:
case 1464:
case 1040:
case 689:
case 3276:
case 161:
case 2259:
case 1702:
case 1659:
case 1394:
case 1471:
case 3818:
case 3912:
case 1077:
case 2257:
case 43:
case 3768:
case 2323:
case 793:
case 2915:
case 3710:
case 1350:
case 2883:
case 1079:
case 1657:
case 1427:
case 527:
case 2419:
case 3560:
case 2160:
case 1298:
case 2583:
case 3183:
case 1313:
case 999:
case 1925:
case 2011:
case 2698:
case 495:
case 920:
case 1802:
case 2965:
case 679:
case 1141:
case 3718:
case 3868:
case 1048:
case 1875:
case 2153:
case 166:
case 2061:
case 1290:
case 3335:
case 2467:
case 92:
case 103:
case 2074:
case 1502:
case 1363:
case 3853:
case 2469:
case 1575:
case 899:
case 1086:
case 2110:
case 4083:
case 3568:
case 2424:
case 2996:
case 2654:
case 2399:
case 543:
case 1105:
case 675:
case 2613:
case 618:
case 3475:
case 3727:
case 4045:
case 1398:
case 1169:
case 2022:
case 420:
case 2701:
case 3688:
case 748:
case 132:
case 564:
case 2193:
case 3729:
case 1167:
case 3940:
case 2745:
case 1250:
case 3514:
case 2907:
case 1623:
case 2357:
case 2650:
case 2047:
case 3000:
case 3742:
case 3376:
case 3921:
case 4001:
case 2070:
case 2956:
case 2496:
case 3018:
case 1877:
case 836:
case 2969:
case 1840:
case 609:
case 3444:
case 4074:
case 2083:
case 1879:
case 1748:
case 1381:
case 1914:
case 173:
case 3285:
case 3339:
case 3462:
case 2761:
case 2811:
case 426:
case 2395:
case 1579:
case 2465:
case 1408:
case 2722:
case 1165:
case 3651:
case 16:
case 4049:
case 2108:
case 3508:
case 3178:
case 862:
case 2578:
case 845:
case 605:
case 22:
case 2941:
case 1303:
case 1562:
case 2407:
case 1953:
case 3064:
case 3440:
case 3243:
case 1844:
case 1712:
case 2878:
case 2833:
case 3352:
case 160:
case 327:
case 821:
case 2972:
case 1616:
case 4022:
case 3902:
case 2045:
case 798:
case 1544:
case 2747:
case 1862:
case 926:
case 449:
case 3237:
case 548:
case 2549:
case 2822:
case 764:
case 2382:
case 945:
case 962:
case 4033:
case 2547:
case 2100:
case 3500:
case 3147:
case 3239:
case 3170:
case 3292:
case 3385:
case 299:
case 2733:
case 921:
case 2681:
case 3708:
case 1960:
case 2849:
case 2266:
case 2870:
case 1762:
case 3800:
case 2125:
case 1404:
case 3161:
case 1655:
case 1777:
case 3504:
case 2104:
case 2574:
case 153:
case 3174:
case 1002:
case 1740:
case 949:
case 1075:
case 1586:
case 1779:
case 364:
case 1942:
case 295:
case 1848:
case 3343:
case 2415:
case 1927:
case 2861:
case 3804:
case 1326:
case 1929:
case 1548:
case 23:
case 2711:
case 3412:
case 1964:
case 3053:
case 2649:
case 2212:
case 3309:
case 1612:
case 2976:
case 2321:
case 952:
case 3307:
case 692:
case 1984:
case 1438:
case 1473:
case 3957:
case 2670:
case 2094:
case 2377:
case 1139:
case 872:
case 1222:
case 784:
case 144:
case 2622:
case 2452:
case 938:
case 2581:
case 3181:
case 590:
case 3088:
case 1566:
case 504:
case 3625:
case 3455:
case 3604:
case 3466:
case 223:
case 3932:
case 2344:
case 2661:
case 3396:
case 3999:
case 163:
case 214:
case 2935:
case 791:
case 2286:
case 2054:
case 2503:
case 3103:
case 539:
case 2439:
case 438:
case 2362:
case 3573:
case 3365:
case 1378:
case 1333:
case 3495:
case 2248:
case 106:
case 497:
case 2703:
case 1882:
case 3830:
case 1211:
case 3416:
case 340:
case 525:
case 2611:
case 1347:
case 1006:
case 1640:
case 4003:
case 101:
case 2240:
case 3207:
case 1059:
case 1185:
case 472:
case 3256:
case 1349:
case 2130:
case 1057:
case 1582:
case 34:
case 374:
case 2312:
case 3482:
case 2781:
case 3608:
case 2526:
case 997:
case 1816:
case 2633:
case 1662:
case 2485:
case 610:
case 657:
case 396:
case 428:
case 774:
case 3080:
case 1516:
case 2989:
case 2386:
case 2826:
case 1099:
case 1795:
case 3851:
case 18:
case 3534:
case 2134:
case 1361:
case 2063:
case 2244:
case 135:
case 3706:
case 768:
case 2342:
case 877:
case 987:
case 3759:
case 1319:
case 1916:
case 3189:
case 3055:
case 1784:
case 2605:
case 1154:
case 2210:
case 3345:
case 3187:
case 104:
case 3757:
case 1317:
case 2364:
case 2641:
case 1073:
case 2889:
case 1038:
case 2329:
case 2926:
case 957:
case 2887:
case 216:
case 1220:
case 356:
case 1653:
case 2253:
case 1131:
case 2327:
case 2123:
case 1614:
case 3523:
case 1194:
case 2735:
case 3930:
case 1888:
case 2039:
case 3797:
case 1328:
case 1224:
case 2669:
case 628:
case 3383:
case 3991:
case 2454:
case 2318:
case 1267:
case 2490:
case 1588:
case 2293:
case 2353:
case 1880:
case 3832:
case 3938:
case 1627:
case 1457:
case 1320:
case 2271:
case 1788:
case 1406:
case 2264:
case 781:
case 3201:
case 1671:
case 3723:
case 2368:
case 1217:
case 300:
case 492:
case 1955:
case 3245:
case 751:
case 1219:
case 1746:
case 1163:
case 1642:
case 2242:
case 2619:
case 3135:
case 2535:
case 2218:
case 381:
case 2393:
case 2981:
case 887:
case 1367:
case 3806:
case 4089:
case 517:
case 1091:
case 2260:
case 112:
case 2463:
case 3283:
case 682:
case 1432:
case 1966:
case 1884:
case 1499:
case 376:
case 4087:
case 3176:
case 2789:
case 794:
case 3559:
case 2085:
case 580:
case 2106:
case 2458:
case 3557:
case 269:
case 1030:
case 2157:
case 2787:
case 2314:
case 652:
case 2817:
case 913:
case 1527:
case 2819:
case 1571:
case 2767:
case 285:
case 1793:
case 1842:
case 1948:
case 2280:
case 1827:
case 1387:
case 3736:
case 3904:
case 1680:
case 3117:
case 1542:
case 315:
case 3418:
case 255:
case 4067:
case 2096:
case 761:
case 378:
case 649:
case 2519:
case 2635:
case 1389:
case 3263:
case 3460:
case 3044:
case 322:
case 1518:
case 4072:
case 2741:
case 2720:
case 3925:
case 3298:
case 1183:
case 1753:
case 3659:
case 3394:
case 834:
case 2676:
case 56:
case 3077:
case 2528:
case 778:
case 867:
case 361:
case 3702:
case 1860:
case 715:
case 3021:
case 3350:
case 2284:
case 2056:
case 2970:
case 259:
case 3775:
case 1684:
case 2947:
case 2705:
case 4020:
case 645:
case 303:
case 2728:
case 1289:
case 626:
case 1335:
case 3493:
case 3172:
case 3290:
case 2572:
case 2820:
case 3086:
case 3254:
case 2687:
case 2933:
case 148:
case 1718:
case 2872:
case 3358:
case 1760:
case 788:
case 4028:
case 3414:
case 409:
case 3231:
case 2805:
case 1436:
case 3120:
case 2717:
case 583:
case 3536:
case 3250:
case 1940:
case 813:
case 3623:
case 2869:
case 1921:
case 1376:
case 2719:
case 2246:
case 358:
case 824:
case 1893:
case 703:
case 2867:
case 1814:
case 405:
case 2567:
case 1771:
case 1593:
case 909:
case 4019:
case 1020:
case 33:
case 3711:
case 653:
case 1901:
case 2053:
case 1273:
case 3603:
case 2343:
case 3415:
case 1041:
case 2804:
case 3861:
case 1652:
case 1422:
case 3919:
case 1756:
case 237:
case 1005:
case 2068:
case 124:
case 395:
case 3917:
case 2504:
case 2161:
case 3561:
case 1945:
case 3255:
case 1707:
case 3574:
case 1983:
case 1391:
case 0:
case 1067:
case 2093:
case 2800:
case 3847:
case 608:
case 3778:
case 848:
case 1024:
case 2486:
case 3849:
case 2122:
case 73:
case 1796:
case 1692:
case 3100:
case 2147:
case 2825:
case 2385:
case 2292:
case 2170:
case 526:
case 1515:
case 795:
case 3822:
case 3928:
case 4008:
case 2014:
case 2237:
case 1112:
case 3382:
case 1330:
case 1144:
case 3355:
case 2975:
case 3747:
case 2042:
case 1596:
case 105:
case 134:
case 3833:
case 2634:
case 167:
case 320:
case 2902:
case 1865:
case 3216:
case 2477:
case 1162:
case 1643:
case 1896:
case 660:
case 1338:
case 2064:
case 2508:
case 1565:
case 2421:
case 521:
case 2651:
case 3409:
case 3941:
case 32:
case 1251:
case 3533:
case 2178:
case 2133:
case 3578:
case 1478:
case 298:
case 3811:
case 109:
case 1556:
case 2337:
case 1121:
case 1179:
case 3465:
case 3774:
case 2392:
case 1028:
case 893:
case 1140:
case 536:
case 448:
case 2936:
case 3761:
case 2462:
case 1856:
case 72:
case 673:
case 1809:
case 2111:
case 3511:
case 2691:
case 3496:
case 3924:
case 2444:
case 2060:
case 3366:
case 1807:
case 3969:
case 1291:
case 1035:
case 65:
case 680:
case 1954:
case 3063:
case 1792:
case 1843:
case 333:
case 3386:
case 110:
case 2851:
case 552:
case 68:
case 702:
case 904:
case 617:
case 11:
case 3151:
case 187:
case 2834:
case 3348:
case 935:
case 3781:
case 2482:
case 446:
case 582:
case 3633:
case 812:
case 1208:
case 439:
case 2256:
case 3279:
case 1752:
case 3312:
case 8:
case 1182:
case 3130:
case 825:
case 1426:
case 1994:
case 1656:
case 733:
case 3277:
case 1300:
case 1585:
case 4038:
case 1950:
case 1076:
case 404:
case 347:
case 841:
case 2416:
case 240:
case 1885:
case 1913:
case 302:
case 490:
case 946:
case 435:
case 1308:
case 3031:
case 528:
case 3437:
case 2365:
case 3248:
case 663:
case 1852:
case 2495:
case 925:
case 3138:
case 3492:
case 2538:
case 3173:
case 2730:
case 1552:
case 254:
case 2997:
case 1963:
case 4091:
case 3344:
case 2838:
case 839:
case 3661:
case 1785:
case 412:
case 3090:
case 1204:
case 846:
case 4:
case 425:
case 2088:
case 1225:
case 670:
case 1998:
case 1166:
case 192:
case 597:
case 3726:
case 4034:
case 3452:
case 3647:
case 2046:
case 2307:
case 3340:
case 1615:
case 644:
case 3377:
case 1539:
case 2957:
case 804:
case 3670:
case 291:
case 3649:
case 2734:
case 835:
case 912:
case 3379:
case 3976:
case 3050:
case 890:
case 1939:
case 2557:
case 369:
case 1992:
case 1184:
case 1754:
case 707:
case 3576:
case 3789:
case 51:
case 1937:
case 3628:
case 817:
case 2506:
case 88:
case 251:
case 3458:
case 3106:
case 1790:
case 97:
case 1731:
case 2283:
case 276:
case 510:
case 3393:
case 3981:
case 85:
case 3218:
case 970:
case 2859:
case 3876:
case 629:
case 2597:
case 342:
case 365:
case 1302:
case 711:
case 2135:
case 3535:
case 294:
case 801:
case 307:
case 2599:
case 3368:
case 3199:
case 2723:
case 2245:
case 1750:
case 3310:
case 200:
case 1180:
case 2016:
case 2532:
case 3835:
case 1558:
case 1863:
case 2201:
case 3043:
case 1476:
case 2973:
case 2832:
case 470:
case 963:
case 6:
case 20:
case 625:
case 4023:
case 1026:
case 3360:
case 3667:
case 3490:
case 3669:
case 1081:
case 901:
case 417:
case 3454:
case 3624:
case 2383:
case 2991:
case 1594:
case 3735:
case 1146:
case 268:
case 480:
case 1813:
case 1985:
case 2636:
case 1550:
case 3214:
case 3037:
case 1236:
case 2799:
case 2523:
case 863:
case 316:
case 4057:
case 1854:
case 1531:
case 3253:
case 2301:
case 577:
case 3364:
case 950:
case 3494:
case 3371:
case 3329:
case 1554:
case 1831:
case 2345:
case 3605:
case 2675:
case 2187:
case 3052:
case 3268:
case 3587:
case 69:
case 1590:
case 197:
case 95:
case 2706:
case 3342:
case 271:
case 2759:
case 1202:
case 1193:
case 3911:
case 1022:
case 973:
case 883:
case 2398:
case 1405:
case 2836:
case 1613:
case 2468:
case 3524:
case 3246:
case 3015:
case 1306:
case 1909:
case 1047:
case 258:
case 318:
case 2536:
case 1420:
case 3717:
case 1049:
case 2453:
case 1114:
case 1745:
case 2623:
case 2231:
case 2414:
case 1153:
case 2141:
case 3872:
case 2358:
case 3541:
case 3933:
case 3978:
case 2908:
case 2105:
case 648:
case 1996:
case 3687:
case 1110:
case 2254:
case 3175:
case 1469:
case 379:
case 2363:
case 718:
case 1690:
case 1074:
case 2502:
case 2290:
case 2172:
case 3841:
case 1061:
case 3689:
case 2657:
case 3284:
case 2427:
case 2775:
case 3056:
case 1915:
case 1883:
case 2079:
case 3947:
case 1206:
case 3676:
case 860:
case 2659:
case 2394:
case 2429:
case 3949:
case 483:
case 3346:
case 1259:
case 3401:
case 2702:
case 3528:
case 2040:
case 261:
case 2128:
case 3007:
case 1698:
case 2925:
case 908:
case 389:
case 4075:
case 2313:
case 4002:
case 453:
case 1160:
case 86:
case 3388:
case 567:
case 145:
case 1118:
case 162:
case 278:
case 215:
case 3096:
case 1142:
case 1663:
case 355:
case 2418:
case 1297:
case 1801:
case 2460:
case 2263:
case 3519:
case 2354:
case 873:
case 1232:
case 3280:
case 3517:
case 1299:
case 1501:
case 1658:
case 3819:
case 1428:
case 408:
case 509:
case 136:
case 3724:
case 1078:
case 149:
case 1845:
case 2331:
case 1127:
case 953:
case 2848:
case 2942:
case 324:
case 3652:
case 3186:
case 3756:
case 2740:
case 1255:
case 3707:
case 253:
case 1104:
case 1561:
case 3449:
case 575:
case 419:
case 13:
case 978:
case 3351:
case 2548:
case 915:
case 2326:
case 2971:
case 2929:
case 4077:
case 1861:
case 1603:
case 3273:
case 3238:
case 1415:
case 664:
case 1874:
case 1570:
case 3515:
case 3639:
case 713:
case 3692:
case 2512:
case 2036:
case 3112:
case 3637:
case 1549:
case 922:
case 1928:
case 579:
case 1125:
case 478:
case 1870:
case 866:
case 3815:
case 1266:
case 1522:
case 2960:
case 3765:
case 1849:
case 1681:
case 3069:
case 961:
case 1733:
case 2812:
case 1778:
case 1001:
case 3338:
case 2953:
case 3643:
case 559:
case 3896:
case 2303:
case 1409:
case 3251:
case 12:
case 1533:
case 4012:
case 2226:
case 822:
case 1722:
case 2165:
case 26:
case 2196:
case 589:
case 3596:
case 2910:
case 3019:
case 966:
case 1770:
case 1045:
case 120:
case 1749:
case 861:
case 1216:
case 3865:
case 260:
case 1972:
case 334:
case 3411:
case 2712:
case 1967:
case 2381:
case 2748:
case 1511:
case 3856:
case 2821:
case 1083:
case 2879:
case 4086:
case 403:
case 1366:
case 2840:
case 2877:
case 2156:
case 2408:
case 734:
case 2579:
case 1465:
case 815:
case 1282:
case 3230:
case 4048:
case 2577:
case 273:
case 705:
case 1774:
case 2107:
case 2914:
case 3140:
case 1058:
case 986:
case 3931:
case 2143:
case 3208:
case 511:
case 3665:
case 1151:
case 881:
case 1348:
case 387:
case 4095:
case 2430:
case 971:
case 1526:
case 2097:
case 3954:
case 1244:
case 3696:
case 133:
case 3304:
case 2361:
case 3739:
case 2644:
case 1987:
case 357:
case 28:
case 3990:
case 217:
case 1989:
case 3737:
case 1386:
case 250:
case 2032:
case 2516:
case 787:
case 71:
case 565:
case 542:
case 80:
case 64:
case 674:
case 3885:
case 3913:
case 3752:
case 2679:
case 456:
case 3426:
case 3182:
case 1130:
case 2057:
case 3656:
case 2582:
case 2349:
case 2946:
case 1221:
case 2185:
case 640:
case 3076:
case 800:
case 2006:
case 201:
case 3300:
case 2347:
case 1286:
case 868:
case 476:
case 3481:
case 1935:
case 3087:
case 1674:
case 90:
case 481:
case 1344:
case 1661:
case 2274:
case 3958:
case 1248:
case 206:
case 792:
case 2333:
case 3308:
case 1437:
case 1173:
case 1492:
case 1377:
case 1670:
case 3200:
case 976:
case 3403:
case 3592:
case 2438:
case 2270:
case 1340:
case 516:
case 270:
case 2249:
case 2612:
case 1050:
case 2137:
case 3537:
case 981:
case 871:
case 377:
case 3892:
case 3166:
case 2566:
case 3839:
case 494:
case 691:
case 1581:
case 1726:
case 951:
case 2311:
case 1452:
case 27:
case 2222:
case 1013:
case 896:
case 454:
case 2499:
case 2884:
case 3731:
case 2369:
case 1260:
case 1463:
case 2497:
case 352:
case 3435:
case 1393:
case 2367:
case 3184:
case 3898:
case 3754:
case 484:
case 3336:
case 681:
case 1628:
case 111:
case 338:
case 382:
case 1159:
case 1085:
case 600:
case 2671:
case 3863:
case 2459:
case 840:
case 1264:
case 3476:
case 1043:
case 241:
case 3558:
case 2158:
case 2406:
case 3601:
case 1271:
case 954:
case 2051:
case 694:
case 1227:
case 1353:
case 3713:
case 874:
case 2372:
case 1619:
case 3858:
case 1535:
case 1242:
case 4088:
case 984:
case 60:
case 225:
case 782:
case 738:
case 1197:
case 165:
case 3302:
case 2746:
case 1132:
case 2580:
case 2217:
case 502:
case 1368:
case 3146:
case 2328:
case 797:
case 3763:
case 2888:
case 328:
case 2194:
case 1735:
case 2982:
case 246:
case 3813:
case 239:
case 1431:
case 3985:
case 2780:
case 3550:
case 1037:
case 2267:
case 1490:
case 2588:
case 1293:
case 3894:
case 884:
case 2846:
case 3489:
case 1360:
case 1667:
case 4080:
case 1454:
case 1624:
case 2269:
case 3850:
case 1669:
case 3081:
case 523:
case 3487:
case 2205:
case 2317:
case 1268:
case 2154:
case 1413:
case 2668:
case 440:
case 2784:
case 1776:
case 1589:
case 290:
case 2319:
case 3202:
case 397:
case 891:
case 235:
case 1342:
case 1327:
case 1620:
case 3943:
case 2423:
case 2653:
case 671:
case 474:
case 44:
case 3890:
case 29:
case 3003:
case 1371:
case 1926:
case 2073:
case 1889:
case 2038:
case 1364:
case 372:
case 1641:
case 837:
case 3909:
case 2000:
case 118:
case 2646:
case 1719:
case 4064:
case 864:
case 3956:
case 1246:
case 53:
case 2376:
case 1384:
case 3745:
case 632:
case 3114:
case 3907:
case 3420:
case 688:
case 3223:
case 1824:
case 1717:
case 3357:
case 2402:
case 3701:
case 2688:
case 2729:
case 3193:
case 2771:
case 4042:
case 2593:
case 1911:
case 658:
case 427:
case 1524:
case 3613:
case 3022:
case 726:
case 3110:
case 1687:
case 179:
case 3469:
case 3424:
case 2568:
case 3168:
case 1841:
case 3467:
case 4018:
case 1689:
case 2289:
case 3397:
case 1102:
case 1520:
case 2436:
case 599:
case 3631:
case 3783:
case 2553:
case 3965:
case 2760:
case 1541:
case 1933:
case 1978:
case 1445:
case 2753:
case 3583:
case 736:
case 4010:
case 3698:
case 437:
case 3011:
case 520:
case 2518:
case 1922:
case 3419:
case 1009:
case 2684:
case 3257:
case 4053:
case 1284:
case 1056:
case 943:
case 3259:
case 1346:
case 2860:
case 2276:
case 52:
case 1528:
case 1676:
case 827:
case 2529:
case 2793:
case 762:
case 2101:
case 1819:
case 3428:
case 349:
case 1065:
case 2986:
case 3297:
case 721:
case 1519:
case 2235:
case 2542:
case 2829:
case 3663:
case 2680:
case 2387:
case 2145:
case 2827:
case 3232:
case 1280:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1769180402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,];
var gg_b = "1769180402/";

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
