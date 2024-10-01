// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 1746:
case 2449:
case 2899:
case 3948:
case 341:
case 978:
case 3913:
case 219:
case 1033:
case 1290:
case 3040:
case 3806:
case 1247:
case 1967:
case 709:
case 1501:
case 1116:
case 1745:
case 493:
case 634:
case 648:
case 3272:
case 4048:
case 1005:
case 2974:
case 1679:
case 3934:
case 2166:
case 3396:
case 665:
case 1991:
case 1151:
case 3045:
case 864:
case 2379:
case 4005:
case 385:
case 3681:
case 558:
case 2265:
case 914:
case 1378:
case 3775:
case 1787:
case 2292:
case 3662:
case 56:
case 557:
case 3839:
case 2798:
case 666:
case 118:
case 1782:
case 3228:
case 2534:
case 2191:
case 708:
case 2642:
case 643:
case 2400:
case 2898:
case 3708:
case 146:
case 71:
case 1605:
case 2650:
case 2200:
case 293:
case 3951:
case 3855:
case 2600:
case 3522:
case 76:
case 871:
case 2658:
case 54:
case 1079:
case 688:
case 569:
case 2810:
case 525:
case 1608:
case 2966:
case 1502:
case 3709:
case 1014:
case 1361:
case 2890:
case 488:
case 991:
case 1245:
case 3293:
case 3897:
case 1210:
case 983:
case 1936:
case 3440:
case 1738:
case 1695:
case 1176:
case 1862:
case 3586:
case 97:
case 868:
case 3606:
case 1321:
case 3877:
case 195:
case 3136:
case 1506:
case 475:
case 605:
case 1126:
case 1847:
case 1875:
case 166:
case 1600:
case 2852:
case 590:
case 2846:
case 2574:
case 3824:
case 1672:
case 2825:
case 751:
case 529:
case 3587:
case 535:
case 2089:
case 520:
case 3845:
case 2883:
case 1615:
case 3001:
case 147:
case 2771:
case 2320:
case 3536:
case 1317:
case 943:
case 32:
case 3570:
case 2077:
case 361:
case 1607:
case 526:
case 2861:
case 1653:
case 3672:
case 1874:
case 3553:
case 3711:
case 2799:
case 2038:
case 1035:
case 3320:
case 2385:
case 41:
case 766:
case 513:
case 2294:
case 2991:
case 2710:
case 1408:
case 937:
case 3116:
case 395:
case 2781:
case 3058:
case 3214:
case 3092:
case 2958:
case 301:
case 411:
case 170:
case 2588:
case 3585:
case 859:
case 3627:
case 4077:
case 1928:
case 3012:
case 1021:
case 1680:
case 1567:
case 1926:
case 3741:
case 197:
case 3129:
case 3383:
case 447:
case 659:
case 703:
case 1940:
case 3462:
case 3921:
case 1029:
case 677:
case 2963:
case 3276:
case 1002:
case 1104:
case 3579:
case 512:
case 2207:
case 3149:
case 2384:
case 2940:
case 3346:
case 1100:
case 2189:
case 2540:
case 2178:
case 3478:
case 2565:
case 258:
case 1620:
case 632:
case 429:
case 2236:
case 3787:
case 119:
case 338:
case 3640:
case 69:
case 1675:
case 756:
case 3494:
case 3631:
case 1486:
case 3069:
case 1384:
case 4089:
case 1881:
case 2327:
case 1799:
case 2106:
case 1556:
case 1227:
case 1844:
case 1631:
case 3643:
case 33:
case 2065:
case 765:
case 2058:
case 2386:
case 1843:
case 930:
case 603:
case 1489:
case 3041:
case 157:
case 2884:
case 2316:
case 3873:
case 3949:
case 1055:
case 1340:
case 2571:
case 3526:
case 1959:
case 334:
case 1852:
case 3250:
case 2994:
case 2494:
case 3954:
case 2025:
case 360:
case 1779:
case 2298:
case 178:
case 60:
case 1215:
case 2578:
case 1597:
case 608:
case 2599:
case 1309:
case 3197:
case 1088:
case 2736:
case 3226:
case 2993:
case 2418:
case 1543:
case 1701:
case 298:
case 2234:
case 4016:
case 108:
case 1344:
case 973:
case 2581:
case 1899:
case 936:
case 1203:
case 858:
case 3161:
case 340:
case 1943:
case 4007:
case 3818:
case 2129:
case 1577:
case 2640:
case 642:
case 3767:
case 577:
case 754:
case 934:
case 2880:
case 1057:
case 39:
case 3304:
case 813:
case 4040:
case 566:
case 2611:
case 2774:
case 3051:
case 1670:
case 1105:
case 2629:
case 2492:
case 3785:
case 2692:
case 924:
case 2777:
case 256:
case 4045:
case 357:
case 2405:
case 1918:
case 320:
case 2034:
case 1676:
case 3999:
case 3193:
case 1415:
case 1488:
case 1089:
case 1841:
case 4058:
case 2177:
case 3338:
case 53:
case 2390:
case 1834:
case 3567:
case 162:
case 2075:
case 51:
case 2290:
case 2368:
case 1477:
case 518:
case 2939:
case 348:
case 4025:
case 1493:
case 787:
case 1933:
case 2702:
case 1306:
case 2463:
case 2100:
case 1478:
case 849:
case 739:
case 2648:
case 1682:
case 1066:
case 3457:
case 3292:
case 265:
case 1687:
case 3933:
case 2610:
case 1173:
case 3113:
case 586:
case 671:
case 1011:
case 1118:
case 2723:
case 1743:
case 4020:
case 2433:
case 117:
case 290:
case 957:
case 3910:
case 479:
case 2713:
case 2017:
case 1601:
case 2850:
case 976:
case 1658:
case 4073:
case 2761:
case 3833:
case 1603:
case 352:
case 392:
case 3724:
case 94:
case 2871:
case 597:
case 2000:
case 1206:
case 2698:
case 522:
case 2577:
case 2281:
case 1878:
case 2360:
case 1285:
case 506:
case 1957:
case 3206:
case 2080:
case 2104:
case 1316:
case 2212:
case 2248:
case 2117:
case 246:
case 540:
case 2651:
case 852:
case 1663:
case 1503:
case 616:
case 1441:
case 1519:
case 3451:
case 3018:
case 3974:
case 3837:
case 1981:
case 958:
case 2567:
case 3642:
case 1961:
case 3617:
case 675:
case 2735:
case 101:
case 2772:
case 31:
case 565:
case 2839:
case 3543:
case 4024:
case 966:
case 1394:
case 2790:
case 1914:
case 1093:
case 3274:
case 2806:
case 3779:
case 3702:
case 9:
case 1664:
case 2946:
case 2902:
case 3310:
case 2271:
case 1839:
case 3900:
case 1411:
case 3984:
case 2915:
case 820:
case 345:
case 2586:
case 3569:
case 3529:
case 2133:
case 1019:
case 3907:
case 75:
case 3201:
case 2691:
case 1107:
case 2934:
case 2323:
case 1938:
case 3333:
case 2397:
case 1890:
case 2289:
case 939:
case 570:
case 1956:
case 2802:
case 2566:
case 1979:
case 1480:
case 1816:
case 2509:
case 2085:
case 1277:
case 1725:
case 3905:
case 3194:
case 373:
case 1024:
case 3294:
case 3130:
case 3128:
case 3520:
case 3941:
case 2501:
case 1539:
case 143:
case 207:
case 1535:
case 733:
case 968:
case 1795:
case 3411:
case 4003:
case 546:
case 1708:
case 2484:
case 24:
case 1987:
case 1080:
case 2045:
case 2022:
case 276:
case 3014:
case 1546:
case 625:
case 720:
case 927:
case 3797:
case 2654:
case 1244:
case 1356:
case 2199:
case 4039:
case 1163:
case 952:
case 1789:
case 2499:
case 1113:
case 3151:
case 2007:
case 1015:
case 2296:
case 3537:
case 3932:
case 2614:
case 1840:
case 1199:
case 486:
case 30:
case 2205:
case 2260:
case 3159:
case 2149:
case 83:
case 3653:
case 1529:
case 2402:
case 1512:
case 1360:
case 795:
case 2633:
case 1522:
case 2412:
case 2312:
case 3186:
case 2944:
case 4054:
case 175:
case 2945:
case 1858:
case 389:
case 2229:
case 2769:
case 2126:
case 3843:
case 2655:
case 2180:
case 3442:
case 164:
case 2113:
case 3318:
case 832:
case 125:
case 951:
case 2662:
case 875:
case 641:
case 1463:
case 3007:
case 350:
case 611:
case 1390:
case 3493:
case 987:
case 281:
case 222:
case 2877:
case 679:
case 1006:
case 3600:
case 2831:
case 1473:
case 2221:
case 2895:
case 1:
case 1007:
case 3541:
case 2426:
case 2204:
case 2941:
case 3592:
case 1822:
case 2109:
case 1417:
case 3703:
case 798:
case 1413:
case 2434:
case 3415:
case 419:
case 2375:
case 3165:
case 2776:
case 436:
case 3099:
case 541:
case 791:
case 3211:
case 85:
case 687:
case 3975:
case 3466:
case 2758:
case 307:
case 647:
case 2987:
case 3487:
case 684:
case 302:
case 3141:
case 887:
case 3645:
case 3081:
case 3492:
case 1076:
case 661:
case 3234:
case 1343:
case 77:
case 2356:
case 777:
case 2069:
case 3668:
case 1226:
case 4018:
case 2742:
case 3102:
case 2595:
case 2420:
case 4086:
case 2512:
case 2102:
case 28:
case 124:
case 3076:
case 2078:
case 3851:
case 3126:
case 1796:
case 1450:
case 967:
case 3673:
case 618:
case 1228:
case 3811:
case 741:
case 1259:
case 1996:
case 547:
case 171:
case 3939:
case 67:
case 2541:
case 148:
case 873:
case 3105:
case 1165:
case 668:
case 2757:
case 289:
case 1301:
case 2378:
case 3607:
case 2076:
case 773:
case 3199:
case 1689:
case 3221:
case 1791:
case 3096:
case 863:
case 3287:
case 911:
case 2950:
case 2146:
case 2164:
case 1902:
case 3795:
case 711:
case 3909:
case 551:
case 730:
case 383:
case 2756:
case 2224:
case 286:
case 1252:
case 4044:
case 961:
case 1808:
case 639:
case 1870:
case 365:
case 3085:
case 3192:
case 2811:
case 1146:
case 1696:
case 3854:
case 926:
case 1532:
case 17:
case 467:
case 1041:
case 1456:
case 1008:
case 3623:
case 837:
case 1334:
case 955:
case 3317:
case 2209:
case 2856:
case 548:
case 2528:
case 3150:
case 2726:
case 3480:
case 2436:
case 1393:
case 1999:
case 2849:
case 3733:
case 2121:
case 931:
case 3485:
case 343:
case 1988:
case 3335:
case 2306:
case 1610:
case 1302:
case 1326:
case 3515:
case 2059:
case 1458:
case 2669:
case 2892:
case 3319:
case 2112:
case 2469:
case 653:
case 2959:
case 3432:
case 2582:
case 693:
case 979:
case 2176:
case 2684:
case 2213:
case 460:
case 1848:
case 1273:
case 134:
case 1233:
case 2801:
case 1028:
case 2687:
case 728:
case 1341:
case 3236:
case 1998:
case 4094:
case 2187:
case 3303:
case 2745:
case 3915:
case 1815:
case 3598:
case 2984:
case 3434:
case 1565:
case 3749:
case 1544:
case 1461:
case 651:
case 1359:
case 1851:
case 3295:
case 1072:
case 3966:
case 2674:
case 133:
case 2925:
case 131:
case 1978:
case 735:
case 2841:
case 321:
case 3066:
case 1407:
case 3488:
case 2975:
case 956:
case 300:
case 2105:
case 3414:
case 1147:
case 515:
case 50:
case 2461:
case 1070:
case 2815:
case 3881:
case 2789:
case 1292:
case 3614:
case 3063:
case 3010:
case 1152:
case 1484:
case 974:
case 1911:
case 2703:
case 3397:
case 2455:
case 1191:
case 1254:
case 2314:
case 1945:
case 3477:
case 3940:
case 396:
case 1624:
case 3301:
case 4015:
case 2986:
case 229:
case 2978:
case 3117:
case 1921:
case 322:
case 4035:
case 1053:
case 2639:
case 4064:
case 846:
case 297:
case 417:
case 476:
case 1632:
case 3563:
case 2293:
case 8:
case 2683:
case 29:
case 2682:
case 48:
case 1137:
case 3859:
case 3355:
case 404:
case 262:
case 2403:
case 3549:
case 450:
case 842:
case 179:
case 1140:
case 1831:
case 57:
case 2362:
case 2497:
case 324:
case 2962:
case 2876:
case 1639:
case 900:
case 2382:
case 4026:
case 1573:
case 1521:
case 1312:
case 4030:
case 601:
case 3413:
case 3257:
case 3139:
case 3080:
case 3210:
case 804:
case 3962:
case 3976:
case 2919:
case 1284:
case 2755:
case 776:
case 3131:
case 1370:
case 2107:
case 2431:
case 2125:
case 769:
case 1045:
case 3052:
case 3245:
case 1242:
case 103:
case 329:
case 2131:
case 2949:
case 274:
case 27:
case 3079:
case 3241:
case 940:
case 1236:
case 2277:
case 866:
case 1353:
case 463:
case 1131:
case 2927:
case 692:
case 1240:
case 390:
case 1141:
case 2416:
case 981:
case 860:
case 2270:
case 2649:
case 2596:
case 650:
case 747:
case 1717:
case 3229:
case 2138:
case 311:
case 1452:
case 3127:
case 2834:
case 1061:
case 1144:
case 15:
case 3170:
case 1123:
case 3523:
case 2123:
case 2447:
case 3509:
case 3510:
case 2201:
case 818:
case 4014:
case 1703:
case 761:
case 1283:
case 2526:
case 200:
case 826:
case 4021:
case 1331:
case 185:
case 3887:
case 731:
case 3697:
case 1941:
case 104:
case 3659:
case 481:
case 3388:
case 890:
case 2482:
case 3937:
case 2225:
case 2491:
case 1246:
case 3857:
case 595:
case 3946:
case 3047:
case 2971:
case 3692:
case 469:
case 3461:
case 831:
case 3704:
case 1421:
case 3314:
case 2719:
case 2623:
case 2352:
case 922:
case 3219:
case 1418:
case 2804:
case 1158:
case 3349:
case 3500:
case 1345:
case 1120:
case 1174:
case 1729:
case 3005:
case 319:
case 1043:
case 2318:
case 1686:
case 722:
case 3791:
case 1818:
case 2568:
case 2111:
case 3942:
case 2321:
case 1562:
case 2796:
case 3481:
case 1213:
case 1440:
case 1442:
case 3316:
case 1386:
case 3694:
case 3473:
case 3190:
case 2028:
case 1122:
case 1758:
case 3696:
case 3547:
case 2820:
case 3991:
case 3288:
case 1731:
case 1549:
case 4038:
case 500:
case 2342:
case 792:
case 545:
case 1832:
case 3599:
case 3629:
case 1232:
case 172:
case 3826:
case 3838:
case 1580:
case 3995:
case 2063:
case 278:
case 3407:
case 1625:
case 2171:
case 1826:
case 339:
case 2587:
case 1296:
case 3899:
case 1570:
case 1171:
case 3572:
case 3306:
case 760:
case 2928:
case 2301:
case 2498:
case 1127:
case 239:
case 335:
case 114:
case 176:
case 898:
case 2163:
case 2653:
case 3439:
case 1798:
case 4092:
case 502:
case 1396:
case 1953:
case 932:
case 835:
case 3911:
case 1704:
case 295:
case 1125:
case 226:
case 3036:
case 3109:
case 221:
case 3834:
case 2423:
case 2478:
case 3746:
case 495:
case 685:
case 3667:
case 3525:
case 716:
case 1646:
case 2173:
case 2570:
case 1783:
case 658:
case 2372:
case 3027:
case 2981:
case 3695:
case 1208:
case 3792:
case 227:
case 912:
case 3061:
case 2525:
case 3862:
case 1530:
case 3665:
case 3233:
case 3752:
case 1559:
case 673:
case 1917:
case 1790:
case 895:
case 2387:
case 62:
case 3902:
case 3422:
case 1635:
case 3072:
case 2666:
case 1400:
case 672:
case 2554:
case 1518:
case 1542:
case 3691:
case 3736:
case 2870:
case 3850:
case 2583:
case 646:
case 1661:
case 606:
case 215:
case 812:
case 1231:
case 4000:
case 3979:
case 2992:
case 2765:
case 2496:
case 3619:
case 127:
case 1931:
case 972:
case 1736:
case 3644:
case 1495:
case 209:
case 3181:
case 2081:
case 636:
case 2466:
case 3062:
case 3258:
case 3994:
case 2809:
case 3095:
case 1271:
case 2505:
case 465:
case 472:
case 3596:
case 3453:
case 424:
case 727:
case 303:
case 174:
case 3601:
case 2242:
case 2012:
case 3734:
case 2380:
case 106:
case 3647:
case 1806:
case 3649:
case 1590:
case 3156:
case 3914:
case 3064:
case 266:
case 3982:
case 3545:
case 2015:
case 3401:
case 1211:
case 3698:
case 496:
case 2845:
case 602:
case 308:
case 3789:
case 1109:
case 267:
case 822:
case 4059:
case 252:
case 3281:
case 1964:
case 1612:
case 559:
case 2728:
case 1428:
case 3225:
case 1040:
case 1032:
case 4085:
case 2370:
case 543:
case 299:
case 1371:
case 1702:
case 1880:
case 1429:
case 2515:
case 2087:
case 2165:
case 1698:
case 2749:
case 165:
case 107:
case 510:
case 1172:
case 680:
case 1297:
case 2976:
case 2489:
case 3137:
case 236:
case 1422:
case 1907:
case 3511:
case 2819:
case 1765:
case 1714:
case 3060:
case 878:
case 762:
case 1067:
case 2855:
case 882:
case 2048:
case 988:
case 815:
case 1963:
case 1906:
case 3169:
case 1511:
case 600:
case 2926:
case 1628:
case 656:
case 2258:
case 3680:
case 1613:
case 1085:
case 1909:
case 3821:
case 323:
case 1889:
case 954:
case 3678:
case 2821:
case 549:
case 402:
case 781:
case 3068:
case 704:
case 1726:
case 2237:
case 487:
case 3542:
case 697:
case 905:
case 1594:
case 615:
case 491:
case 738:
case 1859:
case 1403:
case 3983:
case 1179:
case 455:
case 3958:
case 4067:
case 3759:
case 3778:
case 2750:
case 3879:
case 1793:
case 3771:
case 4028:
case 3856:
case 264:
case 2862:
case 45:
case 3474:
case 874:
case 3608:
case 3280:
case 1238:
case 2968:
case 3017:
case 1912:
case 848:
case 1854:
case 2792:
case 2280:
case 3372:
case 1652:
case 205:
case 2273:
case 3551:
case 2549:
case 242:
case 364:
case 3124:
case 1788:
case 444:
case 2311:
case 2185:
case 1188:
case 1778:
case 3004:
case 2813:
case 368:
case 3371:
case 1604:
case 2734:
case 2906:
case 1786:
case 588:
case 1467:
case 3917:
case 1329:
case 188:
case 167:
case 3254:
case 3945:
case 663:
case 2879:
case 884:
case 3841:
case 1168:
case 380:
case 1115:
case 37:
case 46:
case 1300:
case 3450:
case 1515:
case 1347:
case 1623:
case 1455:
case 4068:
case 913:
case 567:
case 3028:
case 3782:
case 3591:
case 1545:
case 2334:
case 2275:
case 2996:
case 2029:
case 3584:
case 2094:
case 2322:
case 841:
case 3108:
case 941:
case 622:
case 346:
case 2533:
case 1443:
case 3367:
case 2767:
case 3308:
case 3050:
case 3719:
case 2355:
case 2985:
case 2893:
case 180:
case 1666:
case 366:
case 1694:
case 2406:
case 2226:
case 2519:
case 3212:
case 901:
case 2625:
case 3773:
case 38:
case 2297:
case 183:
case 2502:
case 1949:
case 4036:
case 142:
case 1568:
case 3820:
case 3828:
case 1641:
case 2711:
case 1136:
case 3020:
case 3927:
case 247:
case 1288:
case 3805:
case 141:
case 3035:
case 42:
case 433:
case 1096:
case 2843:
case 3084:
case 2445:
case 1807:
case 35:
case 2428:
case 2500:
case 4088:
case 3427:
case 3360:
case 1454:
case 3224:
case 3198:
case 3637:
case 3798:
case 2937:
case 305:
case 1805:
case 1423:
case 2644:
case 2422:
case 1966:
case 2031:
case 3521:
case 2261:
case 121:
case 2167:
case 3760:
case 920:
case 3872:
case 82:
case 2472:
case 1863:
case 3088:
case 3687:
case 2208:
case 2989:
case 2313:
case 2938:
case 3344:
case 2047:
case 208:
case 573:
case 3624:
case 3384:
case 1737:
case 3987:
case 1697:
case 4027:
case 478:
case 2299:
case 1444:
case 2285:
case 4056:
case 3707:
case 3043:
case 1997:
case 4019:
case 2961:
case 296:
case 1969:
case 3138:
case 2545:
case 70:
case 1128:
case 1187:
case 3347:
case 2546:
case 3218:
case 883:
case 1291:
case 1365:
case 283:
case 3621:
case 3669:
case 3208:
case 843:
case 387:
case 1145:
case 664:
case 3438:
case 191:
case 1740:
case 2172:
case 2738:
case 768:
case 2203:
case 3074:
case 511:
case 1185:
case 3800:
case 3816:
case 1470:
case 2009:
case 1767:
case 2070:
case 2350:
case 3106:
case 2414:
case 3305:
case 2740:
case 1167:
case 292:
case 2555:
case 1558:
case 1052:
case 3544:
case 1278:
case 2957:
case 3239:
case 2343:
case 861:
case 3436:
case 1606:
case 1424:
case 599:
case 2923:
case 1031:
case 1155:
case 3182:
case 1004:
case 2136:
case 3326:
case 3758:
case 3364:
case 1406:
case 1614:
case 2936:
case 3989:
case 3690:
case 3896:
case 3786:
case 891:
case 2783:
case 2409:
case 3893:
case 1389:
case 80:
case 1023:
case 3738:
case 2140:
case 437:
case 3753:
case 2256:
case 2773:
case 4037:
case 2721:
case 1299:
case 1471:
case 313:
case 2219:
case 737:
case 3812:
case 2954:
case 1056:
case 2337:
case 1017:
case 928:
case 3928:
case 2561:
case 2930:
case 696:
case 553:
case 3213:
case 2335:
case 3343:
case 3683:
case 196:
case 1159:
case 1721:
case 3342:
case 3969:
case 1648:
case 44:
case 789:
case 2593:
case 2503:
case 3449:
case 710:
case 2056:
case 422:
case 3743:
case 1218:
case 1330:
case 1958:
case 805:
case 3618:
case 2542:
case 2563:
case 857:
case 2712:
case 89:
case 1827:
case 1142:
case 100:
case 220:
case 2724:
case 803:
case 1436:
case 918:
case 1869:
case 1602:
case 1554:
case 403:
case 1397:
case 906:
case 3794:
case 3819:
case 3722:
case 477:
case 1465:
case 3172:
case 1876:
case 2255:
case 953:
case 182:
case 310:
case 3325:
case 428:
case 591:
case 1706:
case 2572:
case 249:
case 248:
case 3890:
case 1810:
case 910:
case 3482:
case 2851:
case 4082:
case 3568:
case 1900:
case 2901:
case 1049:
case 2210:
case 1349:
case 4032:
case 2043:
case 304:
case 1265:
case 1939:
case 3033:
case 563:
case 2398:
case 2539:
case 778:
case 3286:
case 312:
case 990:
case 3336:
case 560:
case 3883:
case 746:
case 4095:
case 1718:
case 1825:
case 3777:
case 232:
case 1496:
case 3476:
case 942:
case 2493:
case 2716:
case 794:
case 3504:
case 332:
case 325:
case 2720:
case 800:
case 1985:
case 3324:
case 3387:
case 3475:
case 1596:
case 427:
case 1498:
case 1059:
case 1468:
case 1183:
case 2970:
case 3125:
case 3613:
case 3880:
case 2573:
case 1973:
case 3285:
case 2005:
case 4049:
case 1058:
case 1857:
case 1552:
case 285:
case 1873:
case 3590:
case 2474:
case 2093:
case 2483:
case 1097:
case 2393:
case 3633:
case 1383:
case 2345:
case 386:
case 3446:
case 1950:
case 576:
case 2137:
case 1261:
case 1314:
case 1802:
case 2060:
case 555:
case 1069:
case 2627:
case 2960:
case 3655:
case 1722:
case 381:
case 3557:
case 2211:
case 260:
case 3467:
case 593:
case 284:
case 1659:
case 2035:
case 2057:
case 1162:
case 109:
case 3230:
case 3107:
case 1263:
case 3576:
case 1713:
case 2967:
case 3634:
case 2202:
case 254:
case 1763:
case 2103:
case 2743:
case 3956:
case 2079:
case 3626:
case 539:
case 1012:
case 3904:
case 2575:
case 1267:
case 1451:
case 2770:
case 3732:
case 3039:
case 3710:
case 1733:
case 3582:
case 1895:
case 135:
case 193:
case 244:
case 353:
case 2411:
case 1237:
case 3037:
case 2507:
case 3046:
case 326:
case 4002:
case 1098:
case 2964:
case 1381:
case 2664:
case 1374:
case 3868:
case 2120:
case 144:
case 456:
case 483:
case 1728:
case 640:
case 3328:
case 1892:
case 3507:
case 3754:
case 3098:
case 2817:
case 2731:
case 824:
case 2454:
case 2003:
case 52:
case 1785:
case 2527:
case 2437:
case 416:
case 2955:
case 1578:
case 1927:
case 3203:
case 2464:
case 2638:
case 2591:
case 1772:
case 4076:
case 2685:
case 1920:
case 1526:
case 745:
case 1402:
case 1264:
case 1255:
case 950:
case 1951:
case 2632:
case 3389:
case 237:
case 3011:
case 2597:
case 734:
case 2935:
case 3728:
case 1054:
case 3119:
case 4065:
case 432:
case 22:
case 909:
case 1735:
case 1619:
case 3220:
case 2388:
case 2417:
case 1279:
case 1499:
case 2344:
case 947:
case 830:
case 3264:
case 2594:
case 159:
case 814:
case 1942:
case 370:
case 876:
case 2678:
case 3602:
case 448:
case 2162:
case 507:
case 3189:
case 430:
case 4004:
case 2537:
case 740:
case 3863:
case 2124:
case 1584:
case 279:
case 2907:
case 3808:
case 1427:
case 970:
case 2227:
case 3262:
case 719:
case 2231:
case 3175:
case 363:
case 259:
case 3836:
case 1198:
case 376:
case 1660:
case 2216:
case 1160:
case 1715:
case 1804:
case 1094:
case 3574:
case 2956:
case 2473:
case 3405:
case 676:
case 1536:
case 271:
case 1533:
case 585:
case 3554:
case 3255:
case 5:
case 328:
case 233:
case 3090:
case 3908:
case 2465:
case 1781:
case 3196:
case 2620:
case 2278:
case 420:
case 2641:
case 1891:
case 3936:
case 2116:
case 499:
case 3368:
case 399:
case 449:
case 1803:
case 3679:
case 362:
case 3764:
case 964:
case 3916:
case 2973:
case 3685:
case 772:
case 187:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1727791202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,];
var gg_b = "1727791202/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
