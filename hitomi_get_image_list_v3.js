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
case 3699:
case 3075:
case 4042:
case 1056:
case 2403:
case 2070:
case 2375:
case 3358:
case 1130:
case 1782:
case 410:
case 4018:
case 961:
case 3370:
case 1677:
case 881:
case 3019:
case 1565:
case 2104:
case 1719:
case 189:
case 145:
case 1895:
case 3476:
case 1455:
case 629:
case 1513:
case 2382:
case 177:
case 3756:
case 3680:
case 3820:
case 2825:
case 3846:
case 2685:
case 1165:
case 3082:
case 3359:
case 761:
case 3824:
case 2161:
case 1821:
case 3684:
case 589:
case 4019:
case 3698:
case 2771:
case 310:
case 2342:
case 89:
case 3018:
case 1433:
case 3042:
case 264:
case 3626:
case 577:
case 2318:
case 1427:
case 3374:
case 1371:
case 1134:
case 3131:
case 2747:
case 2497:
case 2857:
case 3207:
case 3229:
case 863:
case 2582:
case 3883:
case 1436:
case 2989:
case 3004:
case 1409:
case 136:
case 983:
case 1587:
case 1662:
case 2730:
case 373:
case 3170:
case 997:
case 103:
case 2912:
case 276:
case 24:
case 128:
case 662:
case 2990:
case 3637:
case 3468:
case 2119:
case 1704:
case 4061:
case 2713:
case 2575:
case 503:
case 1700:
case 1571:
case 473:
case 3574:
case 1245:
case 124:
case 61:
case 2439:
case 2994:
case 65:
case 1761:
case 4004:
case 2406:
case 1334:
case 1408:
case 1053:
case 3843:
case 1064:
case 1147:
case 2542:
case 1516:
case 3159:
case 499:
case 3473:
case 3000:
case 2118:
case 200:
case 3602:
case 536:
case 2300:
case 330:
case 2142:
case 1547:
case 2613:
case 1604:
case 2219:
case 3601:
case 1585:
case 158:
case 672:
case 2141:
case 3951:
case 1839:
case 1185:
case 3660:
case 2541:
case 2275:
case 3258:
case 1806:
case 70:
case 3270:
case 1915:
case 3529:
case 2577:
case 3922:
case 1037:
case 1979:
case 1287:
case 2242:
case 3702:
case 1216:
case 2218:
case 1247:
case 2911:
case 3903:
case 665:
case 558:
case 3196:
case 690:
case 2181:
case 154:
case 1545:
case 3307:
case 1950:
case 2581:
case 1978:
case 3866:
case 1145:
case 114:
case 1265:
case 1372:
case 2421:
case 1099:
case 167:
case 3656:
case 3329:
case 542:
case 1491:
case 3939:
case 1851:
case 659:
case 5:
case 2377:
case 2833:
case 686:
case 1741:
case 2341:
case 807:
case 3879:
case 2892:
case 3863:
case 2973:
case 2562:
case 1167:
case 1080:
case 2162:
case 420:
case 381:
case 1385:
case 1234:
case 4077:
case 3231:
case 3396:
case 1084:
case 1642:
case 1026:
case 2028:
case 3507:
case 3328:
case 1345:
case 134:
case 3938:
case 1618:
case 2616:
case 567:
case 3740:
case 3726:
case 3850:
case 526:
case 2855:
case 3878:
case 2968:
case 1966:
case 285:
case 249:
case 3412:
case 810:
case 142:
case 2157:
case 1552:
case 733:
case 1959:
case 3831:
case 1834:
case 1462:
case 3423:
case 970:
case 3186:
case 3668:
case 3524:
case 3437:
case 559:
case 6:
case 1521:
case 421:
case 225:
case 2255:
case 380:
case 2800:
case 894:
case 3343:
case 1121:
case 3971:
case 1970:
case 186:
case 212:
case 2125:
case 1608:
case 2606:
case 898:
case 3117:
case 3254:
case 2525:
case 3546:
case 811:
case 3402:
case 3987:
case 2292:
case 3673:
case 3669:
case 3263:
case 770:
case 1222:
case 1830:
case 1297:
case 2391:
case 1238:
case 2086:
case 3091:
case 2818:
case 1816:
case 3386:
case 2752:
case 2603:
case 805:
case 1321:
case 3324:
case 1757:
case 2209:
case 1614:
case 2472:
case 3499:
case 3934:
case 1931:
case 1847:
case 713:
case 3057:
case 2964:
case 3874:
case 248:
case 2357:
case 1905:
case 1352:
case 190:
case 3788:
case 654:
case 1655:
case 3794:
case 3790:
case 279:
case 2795:
case 2901:
case 1239:
case 1633:
case 4091:
case 1481:
case 565:
case 3484:
case 172:
case 3712:
case 3870:
case 2960:
case 590:
case 2208:
case 287:
case 396:
case 3858:
case 2875:
case 3498:
case 3025:
case 1048:
case 2882:
case 302:
case 3930:
case 3346:
case 1012:
case 2017:
case 953:
case 1090:
case 1627:
case 691:
case 1395:
case 139:
case 3183:
case 1419:
case 1691:
case 3694:
case 1755:
case 3776:
case 1845:
case 3828:
case 3166:
case 3688:
case 2881:
case 1303:
case 3566:
case 2314:
case 708:
case 723:
case 1011:
case 3896:
case 3456:
case 4033:
case 3649:
case 4092:
case 3243:
case 2109:
case 3711:
case 4027:
case 2703:
case 1076:
case 3055:
case 2509:
case 2652:
case 305:
case 431:
case 235:
case 3378:
case 2902:
case 2355:
case 4010:
case 1138:
case 802:
case 4014:
case 3689:
case 1442:
case 2054:
case 1418:
case 636:
case 2333:
case 1792:
case 923:
case 908:
case 1710:
case 2447:
case 2722:
case 2108:
case 3010:
case 1322:
case 584:
case 2015:
case 55:
case 201:
case 3612:
case 1885:
case 3648:
case 4055:
case 2310:
case 188:
case 1539:
case 331:
case 575:
case 3027:
case 603:
case 1733:
case 2392:
case 2841:
case 2063:
case 3092:
case 269:
case 2327:
case 2508:
case 1506:
case 2695:
case 2751:
case 704:
case 2937:
case 3460:
case 451:
case 529:
case 1221:
case 246:
case 2984:
case 3009:
case 2291:
case 1404:
case 2336:
case 1338:
case 3178:
case 1928:
case 2926:
case 3945:
case 3768:
case 3286:
case 960:
case 2066:
case 1068:
case 2738:
case 3435:
case 3807:
case 1709:
case 2114:
case 3115:
case 4036:
case 1197:
case 3008:
case 3563:
case 2999:
case 2862:
case 3163:
case 53:
case 4009:
case 3769:
case 2127:
case 1867:
case 795:
case 351:
case 1929:
case 2192:
case 1069:
case 2133:
case 616:
case 1295:
case 129:
case 443:
case 1400:
case 3985:
case 398:
case 3554:
case 2980:
case 1551:
case 222:
case 1461:
case 656:
case 3220:
case 2740:
case 975:
case 374:
case 3745:
case 1728:
case 2850:
case 2490:
case 3200:
case 1417:
case 3495:
case 1876:
case 3968:
case 220:
case 3855:
case 349:
case 2205:
case 3671:
case 1796:
case 91:
case 29:
case 1264:
case 864:
case 947:
case 1446:
case 2107:
case 1502:
case 762:
case 788:
case 1253:
case 1384:
case 1909:
case 2396:
case 1398:
case 3647:
case 2489:
case 1045:
case 2328:
case 1326:
case 478:
case 2507:
case 523:
case 1936:
case 1340:
case 3616:
case 1344:
case 3341:
case 784:
case 3969:
case 3892:
case 2041:
case 3827:
case 3562:
case 1085:
case 449:
case 504:
case 2815:
case 1380:
case 71:
case 281:
case 2799:
case 474:
case 3785:
case 1908:
case 378:
case 2780:
case 1260:
case 2132:
case 962:
case 2656:
case 1670:
case 2329:
case 2077:
case 2494:
case 2939:
case 1201:
case 3204:
case 1486:
case 3377:
case 1137:
case 868:
case 1184:
case 2664:
case 3181:
case 2307:
case 1140:
case 1955:
case 2128:
case 2866:
case 1868:
case 195:
case 4032:
case 2596:
case 427:
case 4093:
case 466:
case 3218:
case 2259:
case 2653:
case 1914:
case 93:
case 1443:
case 3032:
case 263:
case 3282:
case 1910:
case 2997:
case 609:
case 1793:
case 2922:
case 1199:
case 3577:
case 1337:
case 1873:
case 2723:
case 1992:
case 3767:
case 4007:
case 1933:
case 3219:
case 1323:
case 817:
case 929:
case 84:
case 876:
case 2737:
case 2062:
case 3665:
case 1732:
case 560:
case 3541:
case 73:
case 1544:
case 1180:
case 1256:
case 3275:
case 3362:
case 327:
case 3361:
case 786:
case 2159:
case 3949:
case 2000:
case 506:
case 3142:
case 2952:
case 2469:
case 2305:
case 1705:
case 3988:
case 170:
case 2574:
case 1226:
case 533:
case 1240:
case 3439:
case 1284:
case 3281:
case 3406:
case 2921:
case 3519:
case 1925:
case 3948:
case 2760:
case 3912:
case 1280:
case 400:
case 4005:
case 1030:
case 959:
case 1244:
case 866:
case 919:
case 2468:
case 1466:
case 2701:
case 827:
case 3575:
case 2558:
case 3667:
case 3582:
case 2883:
case 1301:
case 3438:
case 3304:
case 3277:
case 1013:
case 671:
case 4031:
case 3989:
case 2004:
case 106:
case 3182:
case 3730:
case 273:
case 3716:
case 482:
case 1202:
case 468:
case 513:
case 1463:
case 2374:
case 1849:
case 3747:
case 141:
case 1153:
case 1071:
case 0:
case 1047:
case 874:
case 2684:
case 3161:
case 2824:
case 2505:
case 1696:
case 2698:
case 92:
case 849:
case 3771:
case 210:
case 2105:
case 739:
case 1016:
case 3891:
case 3451:
case 1894:
case 364:
case 2042:
case 4058:
case 965:
case 3645:
case 1628:
case 2626:
case 1888:
case 2640:
case 1237:
case 4074:
case 1087:
case 2817:
case 1101:
case 1890:
case 3104:
case 1478:
case 2476:
case 1770:
case 3382:
case 2820:
case 1848:
case 2846:
case 3825:
case 2082:
case 382:
case 2699:
case 207:
case 3058:
case 2075:
case 3403:
case 2370:
case 113:
case 3787:
case 541:
case 3319:
case 1373:
case 812:
case 3739:
case 1837:
case 140:
case 2154:
case 2217:
case 2985:
case 3706:
case 1212:
case 3980:
case 2554:
case 322:
case 3533:
case 1248:
case 3225:
case 2832:
case 2464:
case 852:
case 2220:
case 211:
case 991:
case 2453:
case 2563:
case 3527:
case 1431:
case 2972:
case 415:
case 1039:
case 2769:
case 455:
case 613:
case 1289:
case 1977:
case 3127:
case 2515:
case 50:
case 3510:
case 47:
case 2179:
case 1511:
case 1368:
case 641:
case 422:
case 758:
case 1249:
case 2435:
case 1643:
case 243:
case 1111:
case 540:
case 2224:
case 3998:
case 37:
case 346:
case 3984:
case 1576:
case 791:
case 98:
case 2009:
case 3291:
case 3336:
case 914:
case 2945:
case 3155:
case 3413:
case 2178:
case 2036:
case 86:
case 2768:
case 926:
case 3108:
case 1097:
case 879:
case 1474:
case 2612:
case 2648:
case 3310:
case 231:
case 1880:
case 4050:
case 844:
case 2027:
case 2379:
case 3392:
case 3841:
case 3063:
case 2092:
case 369:
case 633:
case 3695:
case 3327:
case 692:
case 1754:
case 1617:
case 2354:
case 2283:
case 1169:
case 3416:
case 3923:
case 1779:
case 2967:
case 7:
case 171:
case 1899:
case 3447:
case 938:
case 2649:
case 4079:
case 3536:
case 2711:
case 3109:
case 3703:
case 726:
case 4063:
case 205:
case 3509:
case 335:
case 934:
case 571:
case 3355:
case 3136:
case 2350:
case 4015:
case 1750:
case 2776:
case 1778:
case 1624:
case 1884:
case 2566:
case 1568:
case 1003:
case 2456:
case 2014:
case 1458:
case 2896:
case 9:
case 3046:
case 2025:
case 3622:
case 3882:
case 1312:
case 3697:
case 393:
case 161:
case 3935:
case 109:
case 1095:
case 1273:
case 2789:
case 1269:
case 1390:
case 2183:
case 2317:
case 1654:
case 1717:
case 956:
case 801:
case 3901:
case 2440:
case 3445:
case 2426:
case 2913:
case 989:
case 2484:
case 977:
case 869:
case 2712:
case 387:
case 916:
case 4086:
case 2498:
case 1856:
case 2858:
case 660:
case 348:
case 3485:
case 3721:
case 4017:
case 2266:
case 432:
case 2444:
case 2676:
case 4046:
case 1650:
case 4020:
case 1394:
case 745:
case 3842:
case 3086:
case 487:
case 756:
case 2091:
case 2386:
case 1388:
case 3209:
case 2859:
case 2934:
case 3953:
case 835:
case 1021:
case 2749:
case 46:
case 724:
case 4043:
case 2673:
case 2669:
case 623:
case 3227:
case 2263:
case 1783:
case 936:
case 1589:
case 1835:
case 1982:
case 221:
case 2215:
case 2120:
case 197:
case 1148:
case 2146:
case 3956:
case 3125:
case 1975:
case 1112:
case 1590:
case 903:
case 928:
case 3804:
case 1190:
case 2383:
case 2254:
case 2117:
case 3233:
case 3525:
case 352:
case 1666:
case 2668:
case 1188:
case 846:
case 2805:
case 3255:
case 2278:
case 597:
case 1194:
case 3191:
case 3591:
case 1594:
case 36:
case 736:
case 3043:
case 2124:
case 1864:
case 1493:
case 1853:
case 728:
case 452:
case 3157:
case 1211:
case 604:
case 3638:
case 2916:
case 3467:
case 412:
case 1952:
case 3547:
case 1559:
case 573:
case 1473:
case 1000:
case 3116:
case 2607:
case 1753:
case 2364:
case 3064:
case 1174:
case 1921:
case 3053:
case 2298:
case 3334:
case 96:
case 814:
case 4001:
case 2353:
case 2991:
case 2240:
case 854:
case 1228:
case 3571:
case 1574:
case 3986:
case 2705:
case 1558:
case 1701:
case 631:
case 2466:
case 3917:
case 3285:
case 2030:
case 1760:
case 912:
case 292:
case 3946:
case 3330:
case 1158:
case 2156:
case 233:
case 3920:
case 3060:
case 173:
case 3662:
case 2299:
case 336:
case 3365:
case 3001:
case 4053:
case 2301:
case 1883:
case 891:
case 3313:
case 1229:
case 3943:
case 241:
case 445:
case 2849:
case 1374:
case 3371:
case 1531:
case 3534:
case 643:
case 779:
case 3852:
case 2479:
case 2202:
case 416:
case 3718:
case 2553:
case 1640:
case 8:
case 2564:
case 842:
case 1886:
case 2628:
case 2016:
case 110:
case 694:
case 2774:
case 948:
case 3347:
case 1698:
case 3681:
case 1684:
case 2164:
case 793:
case 1082:
case 1846:
case 1680:
case 510:
case 2758:
case 3513:
case 377:
case 2501:
case 1476:
case 2478:
case 3455:
case 3113:
case 389:
case 3719:
case 698:
case 1817:
case 979:
case 356:
case 3641:
case 826:
case 3677:
case 611:
case 2223:
case 253:
case 2629:
case 3267:
case 993:
case 2135:
case 2356:
case 3130:
case 1075:
case 1411:
case 3414:
case 1699:
case 107:
case 2446:
case 3:
case 342:
case 2420:
case 3781:
case 2796:
case 1798:
case 2674:
case 4044:
case 680:
case 1412:
case 1205:
case 120:
case 3966:
case 4080:
case 1726:
case 438:
case 3618:
case 1938:
case 426:
case 2045:
case 581:
case 467:
case 3084:
case 1396:
case 2909:
case 3234:
case 1231:
case 2384:
case 3803:
case 2659:
case 1107:
case 2811:
case 3098:
case 3457:
case 1799:
case 1193:
case 1449:
case 3567:
case 3682:
case 208:
case 2085:
case 3230:
case 223:
case 2235:
case 3080:
case 2523:
case 2729:
case 3167:
case 1863:
case 3044:
case 2123:
case 1879:
case 1593:
case 816:
case 1744:
case 3741:
case 969:
case 735:
case 1854:
case 877:
case 1939:
case 1494:
case 3213:
case 1329:
case 2658:
case 1132:
case 901:
case 2260:
case 1780:
case 1906:
case 326:
case 3002:
case 1596:
case 2868:
case 3978:
case 1866:
case 3145:
case 1128:
case 2140:
case 2584:
case 1528:
case 38:
case 1307:
case 2540:
case 2198:
case 1196:
case 946:
case 1274:
case 4023:
case 1653:
case 2707:
case 418:
case 1702:
case 563:
case 3838:
case 2869:
case 715:
case 3037:
case 1723:
case 48:
case 2927:
case 2599:
case 3963:
case 2337:
case 414:
case 1332:
case 746:
case 77:
case 1997:
case 4002:
case 1635:
case 391:
case 3915:
case 1270:
case 922:
case 3806:
case 2256:
case 2544:
case 1660:
case 2732:
case 3185:
case 318:
case 1951:
case 3839:
case 2144:
case 2067:
case 358:
case 3585:
case 2323:
case 696:
case 3604:
case 2933:
case 1317:
case 1183:
case 2269:
case 339:
case 3627:
case 3887:
case 3090:
case 42:
case 4049:
case 2679:
case 2615:
case 1346:
case 3610:
case 2312:
case 102:
case 3048:
case 1858:
case 982:
case 196:
case 1748:
case 1484:
case 4094:
case 3633:
case 3239:
case 2717:
case 3791:
case 2650:
case 4048:
case 2052:
case 2678:
case 3655:
case 4012:
case 2268:
case 85:
case 884:
case 4090:
case 3871:
case 2961:
case 1874:
case 1749:
case 1143:
case 1934:
case 1859:
case 3757:
case 1324:
case 782:
case 472:
case 2429:
case 1543:
case 3238:
case 1215:
case 121:
case 3297:
case 3830:
case 3222:
case 2783:
case 1673:
case 1987:
case 957:
case 1546:
case 2548:
case 3813:
case 3251:
case 1254:
case 1383:
case 2801:
case 94:
case 829:
case 2590:
case 2112:
case 2975:
case 3865:
case 1146:
case 297:
case 580:
case 2864:
case 1250:
case 180:
case 1805:
case 3521:
case 2666:
case 1668:
case 486:
case 2942:
case 83:
case 459:
case 900:
case 2549:
case 1916:
case 757:
case 3636:
case 2149:
case 3462:
case 419:
case 2743:
case 717:
case 2211:
case 3552:
case 776:
case 74:
case 2853:
case 1220:
case 594:
case 1464:
case 1832:
case 927:
case 819:
case 1554:
case 2212:
case 4068:
case 3151:
case 2290:
case 859:
case 2405:
case 2837:
case 2373:
case 886:
case 3929:
case 1179:
case 3597:
case 607:
case 3339:
case 1515:
case 3522:
case 2289:
case 2823:
case 1163:
case 2683:
case 2039:
case 1563:
case 1008:
case 1115:
case 1453:
case 111:
case 3103:
case 2111:
case 33:
case 143:
case 2643:
case 727:
case 1435:
case 551:
case 429:
case 3736:
case 3503:
case 2802:
case 2368:
case 1366:
case 1768:
case 2288:
case 598:
case 1036:
case 2038:
case 1178:
case 2176:
case 1945:
case 194:
case 3404:
case 3338:
case 1401:
case 2576:
case 1578:
case 610:
case 2981:
case 3996:
case 3221:
case 1224:
case 1460:
case 2617:
case 3506:
case 1092:
case 872:
case 1027:
case 1315:
case 2620:
case 2880:
case 388:
case 2022:
case 3397:
case 1612:
case 3932:
case 2474:
case 3106:
case 1010:
case 3322:
case 978:
case 2569:
case 505:
case 839:
case 2459:
case 45:
case 2962:
case 3872:
case 2899:
case 2573:
case 2715:
case 41:
case 3792:
case 774:
case 2051:
case 2173:
case 673:
case 4011:
case 447:
case 2763:
case 1283:
case 1354:
case 749:
case 1350:
case 3138:
case 2376:
case 462:
case 3076:
case 488:
case 778:
case 3714:
case 1711:
case 3538:
case 1243:
case 1649:
case 3907:
case 3482:
case 3475:
case 1456:
case 1014:
case 865:
case 2003:
case 2311:
case 2568:
case 1566:
case 3303:
case 2826:
case 1828:
case 1688:
case 384:
case 2840:
case 375:
case 974:
case 531:
case 3755:
case 2778:
case 1776:
case 3691:
case 3419:
case 1093:
case 679:
case 1362:
case 1541:
case 3180:
case 3732:
case 2185:
case 218:
case 998:
case 2023:
case 3580:
case 3144:
case 2839:
case 1141:
case 258:
case 687:
case 3323:
case 1219:
case 833:
case 3933:
case 1613:
case 2367:
case 2287:
case 794:
case 951:
case 2572:
case 3927:
case 2963:
case 2172:
case 1577:
case 3793:
case 1630:
case 291:
case 2915:
case 1032:
case 798:
case 3631:
case 1634:
case 1911:
case 943:
case 3707:
case 3483:
case 360:
case 3598:
case 2600:
case 395:
case 214:
case 3126:
case 3302:
case 751:
case 2978:
case 1976:
case 648:
case 527:
case 3140:
case 2950:
case 28:
case 711:
case 254:
case 3184:
case 1181:
case 1007:
case 2271:
case 2741:
case 612:
case 3137:
case 705:
case 1029:
case 1377:
case 1204:
case 2213:
case 3670:
case 931:
case 574:
case 2675:
case 3072:
case 267:
case 4045:
case 585:
case 549:
case 1421:
case 652:
case 3260:
case 226:
case 2265:
case 1785:
case 2385:
case 2457:
case 238:
case 308:
case 2822:
case 2230:
case 853:
case 3235:
case 3729:
case 813:
case 1687:
case 2044:
case 1969:
case 1892:
case 3344:
case 1341:
case 2618:
case 3326:
case 841:
case 2040:
case 2026:
case 1028:
case 3045:
case 2642:
case 905:
case 3909:
case 3398:
case 1647:
case 2234:
case 3384:
case 2803:
case 2098:
case 1096:
case 2:
case 2425:
case 242:
case 625:
case 185:
case 2966:
case 1968:
case 1495:
case 408:
case 1855:
case 1745:
case 174:
case 66:
case 2983:
case 2677:
case 4047:
case 3223:
case 3535:
case 808:
case 353:
case 1319:
case 3889:
case 823:
case 3629:
case 1787:
case 3135:
case 2782:
case 137:
case 2130:
case 3356:
case 1070:
case 2414:
case 2056:
case 216:
case 996:
case 1685:
case 3848:
case 2775:
case 3758:
case 277:
case 289:
case 3101:
case 2719:
case 1104:
case 256:
case 3560:
case 2641:
case 3237:
case 1561:
case 3564:
case 2316:
case 67:
case 1645:
case 3628:
case 3454:
case 1100:
case 3894:
case 655:
case 615:
case 3164:
case 2821:
case 1161:
case 3759:
case 2410:
case 2943:
case 1747:
case 3849:
case 1422:
case 796:
case 804:
case 3463:
case 3479:
case 2852:
case 3202:
case 537:
case 3553:
case 921:
case 1182:
case 236:
case 3299:
case 2365:
case 2001:
case 1989:
case 3013:
case 4034:
case 780:
case 2187:
case 1582:
case 1575:
case 3556:
case 601:
case 157:
case 1713:
case 1119:
case 3466:
case 1990:
case 3244:
case 1241:
case 176:
case 1912:
case 392:
case 2330:
case 1519:
case 3335:
case 2920:
case 860:
case 2053:
case 2924:
case 2171:
case 2408:
case 2334:
case 3284:
case 3353:
case 2761:
case 1281:
case 4013:
case 3034:
case 1439:
case 3991:
case 2245:
case 980:
case 2700:
case 370:
case 406:
case 4065:
case 2547:
case 492:
case 1300:
case 433:
case 100:
case 1005:
case 2116:
case 3607:
case 2516:
case 3364:
case 1734:
case 3731:
case 1542:
case 2147:
case 635:
case 2011:
case 3470:
case 1314:
case 3311:
case 99:
case 4051:
case 2303:
case 3884:
case 1621:
case 3686:
case 3168:
case 3826:
case 501:
case 275:
case 3778:
case 2755:
case 1136:
case 1902:
case 135:
case 4022:
case 2076:
case 600:
case 2657:
case 2538:
case 3569:
case 1447:
case 3899:
case 3962:
case 2710:
case 3573:
case 809:
case 861:
case 3779:
case 1333:
case 2418:
case 1416:
case 1923:
case 3169:
case 1937:
case 1695:
case 2506:
case 1327:
case 1079:
case 2139:
case 1841:
case 64:
case 2733:
case 1310:
case 3646:
case 2397:
case 3474:
case 2932:
case 2322:
case 2106:
case 3766:
case 2928:
case 1336:
case 3294:
case 763:
case 155:
case 3576:
case 4039:
case 1984:
case 146:
case 664:
case 2221:
case 1114:
case 1257:
case 2709:
case 3111:
case 3643:
case 440:
case 3249:
case 30:
case 1066:
case 3511:
case 2929:
case 1510:
case 3977:
case 1127:
case 2522:
case 883:
case 3683:
case 3823:
case 3431:
case 1308:
case 2197:
case 4038:
case 963:
case 515:
case 1533:
case 1225:
case 2708:
case 1706:
case 2073:
case 2151:
case 546:
case 3290:
case 3405:
case 40:
case 555:
case 682:
case 3373:
case 497:
case 930:
case 1557:
case 2152:
case 3549:
case 1467:
case 3918:
case 2636:
case 2462:
case 2834:
case 3149:
case 2959:
case 3743:
case 1214:
case 3211:
case 3493:
case 1861:
case 2974:
case 3432:
case 674:
case 16:
case 685:
case 773:
case 483:
case 1800:
case 512:
case 1255:
case 3666:
case 152:
case 3548:
case 1233:
case 1639:
case 1083:
case 219:
case 2195:
case 3512:
case 2251:
case 3801:
case 3190:
case 1606:
case 3590:
case 3112:
case 840:
case 1125:
case 1956:
case 2865:
case 286:
case 2970:
case 3407:
case 1210:
case 2297:
case 3589:
case 3189:
case 1953:
case 2321:
case 1752:
case 2094:
case 2088:
case 1086:
case 1842:
case 3394:
case 1391:
case 532:
case 3900:
case 461:
case 2441:
case 3268:
case 290:
case 2352:
case 707:
case 3724:
case 1485:
case 1357:
case 409:
case 950:
case 22:
case 544:
case 2871:
case 3349:
case 3496:
case 2206:
case 1208:
case 3720:
case 2239:
case 1901:
case 3654:
case 627:
case 710:
case 239:
case 3269:
case 1017:
case 3095:
case 3679:
case 309:
case 361:
case 2012:
case 1935:
case 3348:
case 1697:
case 132:
case 907:
case 2048:
case 1046:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756983601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,];
var gg_b = "1756983601/";

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
