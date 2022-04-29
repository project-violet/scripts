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
var o = 1;
switch (g) {
case 343:
case 1545:
case 1297:
case 1016:
case 1978:
case 1697:
case 3453:
case 400:
case 3187:
case 251:
case 868:
case 1320:
case 2352:
case 1054:
case 3667:
case 99:
case 1617:
case 3894:
case 2782:
case 308:
case 410:
case 1256:
case 1570:
case 4073:
case 2560:
case 2039:
case 2868:
case 2619:
case 1590:
case 2189:
case 774:
case 1129:
case 3868:
case 2936:
case 3129:
case 362:
case 36:
case 553:
case 3621:
case 3207:
case 615:
case 1702:
case 702:
case 814:
case 456:
case 2866:
case 2562:
case 256:
case 1319:
case 501:
case 2031:
case 1661:
case 1453:
case 3991:
case 3154:
case 3245:
case 1747:
case 3781:
case 2396:
case 3784:
case 76:
case 2240:
case 357:
case 2429:
case 3695:
case 4013:
case 1821:
case 274:
case 137:
case 575:
case 2526:
case 3161:
case 2784:
case 4035:
case 2075:
case 795:
case 1144:
case 235:
case 1420:
case 3779:
case 1586:
case 2137:
case 2395:
case 3579:
case 3703:
case 3276:
case 55:
case 3024:
case 931:
case 2923:
case 415:
case 1830:
case 3838:
case 2539:
case 2408:
case 3315:
case 2192:
case 4051:
case 3018:
case 1275:
case 2570:
case 1879:
case 2991:
case 1507:
case 3350:
case 2911:
case 3858:
case 3405:
case 1012:
case 3097:
case 2843:
case 2546:
case 809:
case 349:
case 87:
case 1864:
case 3459:
case 2939:
case 1615:
case 1546:
case 1522:
case 3267:
case 2567:
case 1943:
case 3873:
case 824:
case 184:
case 2809:
case 2142:
case 3032:
case 3206:
case 622:
case 2754:
case 925:
case 49:
case 2432:
case 2063:
case 4079:
case 2942:
case 2517:
case 394:
case 1537:
case 2932:
case 761:
case 830:
case 1526:
case 51:
case 3426:
case 1769:
case 2197:
case 2747:
case 3424:
case 595:
case 1180:
case 1434:
case 2552:
case 4022:
case 150:
case 3993:
case 2127:
case 3528:
case 3540:
case 734:
case 2706:
case 2807:
case 1986:
case 2904:
case 3225:
case 383:
case 2104:
case 367:
case 1862:
case 2394:
case 2976:
case 1584:
case 2280:
case 2948:
case 2810:
case 2627:
case 44:
case 2448:
case 1929:
case 1809:
case 1464:
case 4095:
case 2786:
case 265:
case 2230:
case 2665:
case 3401:
case 2761:
case 2038:
case 723:
case 447:
case 2136:
case 3583:
case 2431:
case 1634:
case 3676:
case 3413:
case 2672:
case 1844:
case 2595:
case 3759:
case 3738:
case 3340:
case 2263:
case 1389:
case 2042:
case 337:
case 2037:
case 1540:
case 3688:
case 2497:
case 1286:
case 963:
case 1516:
case 1689:
case 2111:
case 2475:
case 3956:
case 1992:
case 3756:
case 2990:
case 3311:
case 855:
case 1491:
case 3685:
case 61:
case 2870:
case 317:
case 3192:
case 4060:
case 2819:
case 1444:
case 46:
case 1024:
case 1525:
case 21:
case 1574:
case 2975:
case 2003:
case 3546:
case 3958:
case 1856:
case 2174:
case 508:
case 3447:
case 1422:
case 242:
case 4016:
case 3511:
case 190:
case 1851:
case 3169:
case 3246:
case 2902:
case 3257:
case 475:
case 1154:
case 3647:
case 1587:
case 171:
case 2005:
case 858:
case 2081:
case 753:
case 2418:
case 2078:
case 250:
case 437:
case 3638:
case 2480:
case 836:
case 3460:
case 3243:
case 775:
case 3504:
case 1025:
case 607:
case 2132:
case 3713:
case 2924:
case 3806:
case 2260:
case 3167:
case 2014:
case 784:
case 95:
case 2274:
case 656:
case 2074:
case 3197:
case 3292:
case 4076:
case 3312:
case 3431:
case 228:
case 3358:
case 2641:
case 1781:
case 4090:
case 4089:
case 1433:
case 350:
case 2613:
case 160:
case 3011:
case 625:
case 1667:
case 2885:
case 3123:
case 887:
case 677:
case 3157:
case 593:
case 126:
case 1209:
case 1018:
case 1442:
case 2532:
case 1593:
case 701:
case 3743:
case 3263:
case 1387:
case 4006:
case 484:
case 2026:
case 3256:
case 3763:
case 1438:
case 2654:
case 178:
case 2769:
case 1683:
case 581:
case 1058:
case 3852:
case 1220:
case 3596:
case 1877:
case 523:
case 1105:
case 1121:
case 992:
case 653:
case 3561:
case 1704:
case 4050:
case 2970:
case 2476:
case 2242:
case 311:
case 3141:
case 1953:
case 3494:
case 1754:
case 2467:
case 2788:
case 3808:
case 1071:
case 2248:
case 557:
case 1755:
case 295:
case 632:
case 790:
case 1797:
case 3473:
case 4093:
case 2092:
case 288:
case 2084:
case 220:
case 149:
case 1443:
case 1859:
case 3227:
case 3319:
case 679:
case 609:
case 984:
case 876:
case 205:
case 1672:
case 2901:
case 334:
case 617:
case 1395:
case 1314:
case 231:
case 3184:
case 883:
case 2839:
case 3500:
case 384:
case 440:
case 489:
case 1036:
case 3655:
case 3861:
case 3564:
case 1472:
case 2465:
case 3509:
case 2416:
case 3280:
case 3876:
case 975:
case 2479:
case 2622:
case 1119:
case 1795:
case 2096:
case 2699:
case 2875:
case 2972:
case 572:
case 2188:
case 1349:
case 2789:
case 3040:
case 2399:
case 2598:
case 0:
case 3285:
case 3133:
case 1087:
case 1023:
case 1993:
case 3572:
case 1680:
case 2625:
case 3780:
case 13:
case 1715:
case 3031:
case 3543:
case 3633:
case 18:
case 2802:
case 239:
case 1053:
case 3094:
case 1410:
case 2095:
case 1306:
case 2681:
case 2694:
case 3355:
case 3325:
case 2435:
case 2607:
case 754:
case 1509:
case 3332:
case 543:
case 3603:
case 2838:
case 2320:
case 3160:
case 1081:
case 1666:
case 740:
case 445:
case 3859:
case 1156:
case 582:
case 1145:
case 1805:
case 1034:
case 1348:
case 485:
case 1178:
case 2227:
case 1649:
case 3254:
case 2998:
case 3955:
case 329:
case 2493:
case 3890:
case 1676:
case 3682:
case 1842:
case 1681:
case 3287:
case 2626:
case 1485:
case 1808:
case 2603:
case 1670:
case 1562:
case 3987:
case 1484:
case 1174:
case 14:
case 3091:
case 1793:
case 1957:
case 929:
case 1813:
case 3462:
case 3000:
case 3715:
case 1710:
case 1798:
case 175:
case 623:
case 1663:
case 2601:
case 1009:
case 663:
case 2442:
case 2828:
case 3146:
case 662:
case 3907:
case 2342:
case 1259:
case 2687:
case 1613:
case 3994:
case 1283:
case 1079:
case 516:
case 922:
case 1268:
case 641:
case 1714:
case 2906:
case 947:
case 1279:
case 2388:
case 1041:
case 2704:
case 3541:
case 1494:
case 906:
case 374:
case 478:
case 2268:
case 3235:
case 2237:
case 3308:
case 1579:
case 620:
case 1131:
case 3059:
case 94:
case 695:
case 1699:
case 1352:
case 982:
case 619:
case 1564:
case 3065:
case 1829:
case 1413:
case 3826:
case 4069:
case 1735:
case 3794:
case 3786:
case 3328:
case 3467:
case 3522:
case 161:
case 3025:
case 2960:
case 494:
case 3706:
case 428:
case 2915:
case 3969:
case 3694:
case 819:
case 2068:
case 2955:
case 1961:
case 454:
case 2621:
case 2276:
case 3595:
case 2711:
case 1095:
case 3929:
case 1439:
case 3147:
case 1307:
case 80:
case 2714:
case 940:
case 41:
case 1565:
case 2325:
case 2250:
case 1295:
case 2343:
case 401:
case 1133:
case 1446:
case 1644:
case 2893:
case 3063:
case 1983:
case 1639:
case 2451:
case 2759:
case 3707:
case 2730:
case 776:
case 3658:
case 3882:
case 3626:
case 4056:
case 366:
case 1722:
case 119:
case 112:
case 52:
case 3432:
case 302:
case 2226:
case 417:
case 1356:
case 1777:
case 125:
case 3721:
case 1169:
case 1061:
case 3228:
case 1380:
case 2813:
case 3954:
case 919:
case 2742:
case 626:
case 89:
case 3496:
case 480:
case 3936:
case 1101:
case 3438:
case 820:
case 3762:
case 918:
case 699:
case 467:
case 1350:
case 3705:
case 2296:
case 1610:
case 1026:
case 2882:
case 1652:
case 3108:
case 1977:
case 359:
case 1334:
case 1237:
case 2033:
case 2088:
case 966:
case 3562:
case 1642:
case 1959:
case 2723:
case 1184:
case 3036:
case 2678:
case 745:
case 1111:
case 2478:
case 804:
case 3275:
case 3648:
case 2494:
case 2462:
case 1243:
case 3716:
case 810:
case 209:
case 1561:
case 1909:
case 4040:
case 503:
case 1340:
case 3761:
case 3730:
case 708:
case 3200:
case 3584:
case 3783:
case 649:
case 2610:
case 2585:
case 4043:
case 2008:
case 3877:
case 3940:
case 796:
case 284:
case 3678:
case 444:
case 1870:
case 558:
case 2887:
case 245:
case 2511:
case 1939:
case 1325:
case 2721:
case 3529:
case 610:
case 645:
case 735:
case 3775:
case 157:
case 3465:
case 1892:
case 3977:
case 3906:
case 2580:
case 3817:
case 347:
case 2312:
case 4009:
case 2785:
case 3168:
case 2852:
case 2549:
case 944:
case 629:
case 2481:
case 2588:
case 532:
case 749:
case 3322:
case 3574:
case 3803:
case 2373:
case 930:
case 59:
case 272:
case 3585:
case 2993:
case 219:
case 778:
case 1500:
case 3210:
case 244:
case 1506:
case 2370:
case 3662:
case 2181:
case 3248:
case 2680:
case 3152:
case 2737:
case 1321:
case 2338:
case 1241:
case 2656:
case 3082:
case 1276:
case 1213:
case 1267:
case 2100:
case 933:
case 2066:
case 2967:
case 1473:
case 3612:
case 4019:
case 3934:
case 3769:
case 3279:
case 2740:
case 3842:
case 727:
case 3268:
case 3343:
case 2206:
case 3397:
case 341:
case 2618:
case 1551:
case 3240:
case 229:
case 1690:
case 1403:
case 1891:
case 3444:
case 1706:
case 2257:
case 434:
case 2217:
case 3352:
case 1497:
case 1742:
case 1768:
case 536:
case 3653:
case 3252:
case 2216:
case 3164:
case 2973:
case 3208:
case 1014:
case 2153:
case 258:
case 2527:
case 1716:
case 2155:
case 2827:
case 1651:
case 988:
case 2201:
case 1976:
case 3860:
case 3989:
case 3153:
case 2713:
case 2719:
case 927:
case 465:
case 391:
case 1601:
case 2023:
case 1650:
case 1563:
case 193:
case 1788:
case 3005:
case 1402:
case 2652:
case 196:
case 1524:
case 3323:
case 1510:
case 3327:
case 50:
case 2515:
case 3545:
case 303:
case 3499:
case 2022:
case 2368:
case 142:
case 1932:
case 3378:
case 1594:
case 1839:
case 130:
case 2803:
case 2377:
case 3879:
case 965:
case 2417:
case 1571:
case 2724:
case 3814:
case 1436:
case 123:
case 2722:
case 2231:
case 2908:
case 880:
case 2659:
case 173:
case 989:
case 696:
case 633:
case 1982:
case 1270:
case 517:
case 2878:
case 2571:
case 502:
case 1369:
case 1130:
case 1187:
case 1065:
case 3677:
case 2535:
case 1199:
case 3266:
case 2288:
case 2551:
case 2640:
case 1897:
case 2286:
case 678:
case 1539:
case 69:
case 2876:
case 1404:
case 3740:
case 234:
case 331:
case 280:
case 136:
case 3719:
case 4031:
case 2028:
case 1124:
case 783:
case 1367:
case 693:
case 2524:
case 3294:
case 1466:
case 2367:
case 1354:
case 291:
case 1914:
case 2988:
case 1987:
case 4082:
case 2757:
case 664:
case 2981:
case 254:
case 1671:
case 3613:
case 306:
case 2411:
case 198:
case 2614:
case 1899:
case 2573:
case 2696:
case 2775:
case 73:
case 96:
case 1848:
case 721:
case 122:
case 2215:
case 1160:
case 3896:
case 2821:
case 3062:
case 2083:
case 278:
case 1341:
case 3100:
case 888:
case 956:
case 3847:
case 3863:
case 3073:
case 1167:
case 550:
case 3233:
case 750:
case 2430:
case 3106:
case 673:
case 890:
case 3118:
case 1146:
case 2854:
case 2966:
case 3416:
case 832:
case 1310:
case 3428:
case 3003:
case 2204:
case 2545:
case 2692:
case 3884:
case 319:
case 27:
case 3466:
case 827:
case 3053:
case 3871:
case 246:
case 351:
case 3790:
case 979:
case 197:
case 1107:
case 3602:
case 521:
case 2413:
case 499:
case 2733:
case 2404:
case 4072:
case 2513:
case 2766:
case 1868:
case 1458:
case 1543:
case 731:
case 3116:
case 3851:
case 1765:
case 908:
case 4071:
case 2945:
case 3801:
case 2698:
case 144:
case 3440:
case 3652:
case 1760:
case 3654:
case 4002:
case 1419:
case 588:
case 2305:
case 1913:
case 2421:
case 2952:
case 3492:
case 1906:
case 1000:
case 3979:
case 2369:
case 1557:
case 3581:
case 413:
case 1115:
case 3409:
case 3048:
case 3072:
case 2604:
case 1215:
case 864:
case 1528:
case 831:
case 707:
case 1008:
case 1814:
case 200:
case 1073:
case 2282:
case 3497:
case 3122:
case 3209:
case 3850:
case 1559:
case 4087:
case 355:
case 2184:
case 1331:
case 3069:
case 1082:
case 647:
case 2772:
case 146:
case 3710:
case 1181:
case 426:
case 3249:
case 2703:
case 2931:
case 3736:
case 299:
case 2355:
case 3892:
case 1553:
case 2279:
case 2108:
case 2067:
case 961:
case 3616:
case 1381:
case 605:
case 2756:
case 3415:
case 1301:
case 762:
case 3191:
case 3888:
case 3021:
case 3177:
case 2035:
case 2798:
case 3216:
case 439:
case 2505:
case 131:
case 562:
case 1224:
case 3111:
case 1558:
case 3198:
case 1191:
case 211:
case 3516:
case 3594:
case 658:
case 3291:
case 2117:
case 3872:
case 3389:
case 2112:
case 3903:
case 1251:
case 487:
case 954:
case 186:
case 252:
case 225:
case 3230:
case 1305:
case 2783:
case 1627:
case 923:
case 3113:
case 3224:
case 1530:
case 3399:
case 3735:
case 321:
case 3356:
case 3102:
case 1946:
case 3309:
case 1936:
case 1141:
case 2354:
case 3301:
case 464:
case 1223:
case 3996:
case 4037:
case 2985:
case 1684:
case 1108:
case 3560:
case 2247:
case 255:
case 3792:
case 3398:
case 3590:
case 1588:
case 1515:
case 2514:
case 3423:
case 2589:
case 3666:
case 124:
case 751:
case 4088:
case 2874:
case 53:
case 1063:
case 3985:
case 3720:
case 3915:
case 797:
case 1427:
case 704:
case 1581:
case 3381:
case 212:
case 2093:
case 3226:
case 3566:
case 2913:
case 352:
case 3351:
case 2836:
case 202:
case 709:
case 2702:
case 514:
case 522:
case 1204:
case 3515:
case 8:
case 72:
case 818:
case 1396:
case 1004:
case 3359:
case 1001:
case 3411:
case 3289:
case 2339:
case 492:
case 2378:
case 2755:
case 1361:
case 537:
case 3932:
case 1043:
case 4083:
case 1495:
case 901:
case 2460:
case 1801:
case 2817:
case 1730:
case 3831:
case 301:
case 201:
case 304:
case 34:
case 3124:
case 1853:
case 3843:
case 1066:
case 1518:
case 1981:
case 3753:
case 3900:
case 9:
case 2449:
case 2725:
case 3598:
case 1448:
case 4012:
case 2523:
case 2587:
case 2241:
case 2278:
case 1099:
case 2855:
case 1038:
case 3751:
case 4007:
case 3190:
case 1867:
case 3373:
case 227:
case 1151:
case 3841:
case 2053:
case 853:
case 1592:
case 257:
case 1186:
case 1401:
case 705:
case 1609:
case 2728:
case 3840:
case 644:
case 2208:
case 771:
case 716:
case 2058:
case 1388:
case 3726:
case 1820:
case 2738:
case 2178:
case 1589:
case 1641:
case 1377:
case 185:
case 2262:
case 1991:
case 2469:
case 2351:
case 4042:
case 266:
case 3165:
case 1142:
case 2384:
case 3728:
case 2631:
case 788:
case 560:
case 3149:
case 241:
case 2071:
case 2073:
case 443:
case 141:
case 1:
case 1728:
case 269:
case 217:
case 2285:
case 1550:
case 1568:
case 1384:
case 506:
case 1890:
case 642:
case 3205:
case 3125:
case 4052:
case 1751:
case 1624:
case 3158:
case 2930:
case 2405:
case 2751:
case 3026:
case 807:
case 3768:
case 3764:
case 3130:
case 326:
case 90:
case 1787:
case 282:
case 3824:
case 518:
case 898:
case 2671:
case 2630:
case 3620:
case 742:
case 977:
case 1783:
case 1482:
case 28:
case 1678:
case 2594:
case 1628:
case 634:
case 690:
case 768:
case 958:
case 3953:
case 733:
case 534:
case 2531:
case 3302:
case 1397:
case 2004:
case 402:
case 4000:
case 399:
case 1170:
case 35:
case 967:
case 2648:
case 725:
case 3455:
case 1421:
case 1261:
case 3898:
case 1949:
case 1117:
case 358:
case 953:
case 62:
case 3260:
case 336:
case 1605:
case 313:
case 2424:
case 856:
case 828:
case 2330:
case 3673:
case 376:
case 711:
case 1904:
case 1233:
case 1425:
case 3471:
case 2669:
case 2129:
case 3582:
case 1922:
case 875:
case 1547:
case 4068:
case 86:
case 2252:
case 2845:
case 483:
case 498:
case 2361:
case 2508:
case 603:
case 3084:
case 686:
case 542:
case 3277:
case 3805:
case 2131:
case 2634:
case 968:
case 1226:
case 896:
case 3514:
case 3486:
case 3773:
case 2542:
case 3536:
case 1345:
case 3701:
case 1718:
case 3270:
case 3911:
case 712:
case 3298:
case 3145:
case 1248:
case 2736:
case 354:
case 1468:
case 881:
case 3064:
case 2636:
case 452:
case 1089:
case 2541:
case 2239:
case 3752:
case 2164:
case 1385:
case 1366:
case 1963:
case 1230:
case 2602:
case 3788:
case 3349:
case 328:
case 1863:
case 1370:
case 2139:
case 806:
case 414:
case 3071:
case 1051:
case 249:
case 1015:
case 3365:
case 999:
case 159:
case 2778:
case 1626:
case 2825:
case 2869:
case 689:
case 972:
case 2964:
case 1695:
case 1647:
case 115:
case 1874:
case 2962:
case 179:
case 3434:
case 1607:
case 1019:
case 1227:
case 544:
case 23:
case 1792:
case 1386:
case 3796:
case 2089:
case 113:
case 290:
case 1060:
case 409:
case 208:
case 2891:
case 1481:
case 4017:
case 942:
case 4080:
case 1182:
case 2847:
case 315:
case 3392:
case 2735:
case 2605:
case 3656:
case 3664:
case 1938:
case 2381:
case 1872:
case 4001:
case 2057:
case 204:
case 2926:
case 2291:
case 2125:
case 3366:
case 509:
case 764:
case 4023:
case 2474:
case 3739:
case 2450:
case 294:
case 1094:
case 433:
case 5:
case 3251:
case 579:
case 2440:
case 983:
case 3501:
case 1648:
case 3335:
case 1896:
case 2863:
case 861:
case 3578:
case 3258:
case 2020:
case 1007:
case 460:
case 129:
case 2079:
case 2439:
case 935:
case 893:
case 2668:
case 1299:
case 3624:
case 3772:
case 1602:
case 1549:
case 939:
case 596:
case 3045:
case 3816:
case 2393:
case 2158:
case 309:
case 747:
case 4003:
case 3178:
case 1382:
case 3966:
case 2731:
case 2316:
case 273:
case 143:
case 1919:
case 3926:
case 1711:
case 1285:
case 12:
case 2228:
case 2179:
case 3437:
case 4054:
case 2172:
case 2236:
case 1013:
case 1031:
case 2166:
case 1372:
case 2297:
case 2251:
case 3234:
case 4092:
case 3144:
case 1017:
case 1826:
case 3649:
case 3454:
case 1739:
case 188:
case 3518:
case 1750:
case 3450:
case 1694:
case 1968:
case 2256:
case 2344:
case 3339:
case 3281:
case 3443:
case 1496:
case 860:
case 3952:
case 3819:
case 1811:
case 2748:
case 2564:
case 1780:
case 1733:
case 2683:
case 1047:
case 2438:
case 3944:
case 3212:
case 630:
case 1271:
case 2156:
case 1440:
case 3132:
case 2753:
case 1161:
case 2986:
case 3681:
case 2673:
case 2495:
case 755:
case 661:
case 3962:
case 3741:
case 1431:
case 529:
case 3370:
case 834:
case 4086:
case 260:
case 3361:
case 2615:
case 2590:
case 497:
case 324:
case 3360:
case 1400:
case 1418:
case 2224:
case 1158:
case 2779:
case 4004:
case 2850:
case 390:
case 1179:
case 777:
case 2121:
case 1552:
case 3050:
case 2243:
case 3605:
case 3651:
case 2214:
case 3418:
case 1834:
case 718:
case 2675:
case 2987:
case 3813:
case 3988:
case 604:
case 194:
case 2518:
case 2277:
case 2211:
case 3140:
case 4077:
case 3625:
case 2689:
case 3793:
case 2337:
case 2894:
case 773:
case 3553:
case 3939:
case 995:
case 3105:
case 1810:
case 970:
case 2333:
case 1486:
case 1840:
case 261:
case 2331:
case 3671:
case 10:
case 348:
case 1682:
case 1972:
case 2461:
case 2814:
case 2309:
case 3194:
case 980:
case 2392:
case 1150:
case 3127:
case 2120:
case 2308:
case 1799:
case 378:
case 3609:
case 3983:
case 2984:
case 520:
case 3697:
case 3396:
case 1344:
case 48:
case 1333:
case 1069:
case 3394:
case 2044:
case 1861:
case 872:
case 1393:
case 221:
case 2222:
case 1998:
case 1894:
case 2639:
case 153:
case 3419:
case 3086:
case 3999:
case 1126:
case 2584:
case 512:
case 3305:
case 3313:
case 1964:
case 1915:
case 846:
case 388:
case 932:
case 1027:
case 793:
case 1772:
case 1707:
case 2834:
case 4046:
case 3660:
case 3972:
case 371:
case 215:
case 4014:
case 162:
case 3570:
case 1351:
case 3170:
case 457:
case 1937:
case 515:
case 2363:
case 3968:
case 628:
case 1449:
case 1709:
case 1489:
case 2506:
case 1103:
case 3250:
case 3798:
case 1501:
case 1527:
case 2122:
case 345:
case 1934:
case 877:
case 3998:
case 2846:
case 976:
case 3029:
case 1378:
case 1159:
case 2943:
case 1379:
case 116:
case 2660:
case 1816:
case 1608:
case 4066:
case 1465:
case 3644:
case 1774:
case 1185:
case 1662:
case 2072:
case 2667:
case 1719:
case 2576:
case 449:
case 1406:
case 1359:
case 2832:
case 907:
case 2076:
case 369:
case 1637:
case 657:
case 2468:
case 1761:
case 957:
case 3935:
case 4026:
case 3138:
case 2658:
case 2372:
case 2707:
case 2180:
case 1893:
case 2473:
case 1222:
case 3491:
case 2310:
case 648:
case 4059:
case 495:
case 3957:
case 2318:
case 3692:
case 1202:
case 1070:
case 2540:
case 1950:
case 1835:
case 1303:
case 1032:
case 1731:
case 2110:
case 2056:
case 3357:
case 2916:
case 688:
case 4057:
case 259:
case 2739:
case 7:
case 2760:
case 3532:
case 3237:
case 3589:
case 1687:
case 453:
case 1632:
case 1091:
case 2233:
case 1920:
case 2795:
case 1789:
case 3317:
case 3056:
case 3829:
case 3507:
case 1392:
case 3393:
case 1954:
case 429:
case 3345:
case 3690:
case 1062:
case 3272:
case 2021:
case 1825:
case 2774:
case 1597:
case 493:
case 1475:
case 2950:
case 412:
case 1875:
case 3151:
case 987:
case 1290:
case 3611:
case 2934:
case 264:
case 2350:
case 2348:
case 2927:
case 3336:
case 1417:
case 2006:
case 3010:
case 2691:
case 2176:
case 1441:
case 1050:
case 590:
case 2265:
case 1206:
case 387:
case 2959:
case 2036:
case 1312:
case 3904:
case 1782:
case 2102:
case 1800:
case 2270:
case 936:
case 1623:
case 1196:
case 2177:
case 1536:
case 56:
case 1997:
case 210:
case 3390:
case 3995:
case 1700:
case 1614:
case 3028:
case 1818:
case 1245:
case 42:
case 3789:
case 2138:
case 1822:
case 1362:
case 3683:
case 397:
case 2232:
case 4085:
case 1712:
case 3617:
case 2572:
case 395:
case 1984:
case 798:
case 2313:
case 1910:
case 3092:
case 3247:
case 3344:
case 3883:
case 3737:
case 4020:
case 1353:
case 871:
case 3490:
case 469:
case 1773:
case 1211:
case 909:
case 2529:
case 2427:
case 3748:
case 2899:
case 2364:
case 2445:
case 4049:
case 583:
case 2693:
case 2780:
case 2060:
case 3725:
case 342:
case 3013:
case 3137:
case 2087:
case 3244:
case 3353:
case 213:
case 2322:
case 1701:
case 2030:
case 978:
case 4024:
case 2317:
case 2554:
case 4:
case 2126:
case 822:
case 134:
case 2146:
case 3347:
case 1456:
case 81:
case 3004:
case 64:
case 2175:
case 1705:
case 1454:
case 985:
case 3445:
case 4018:
case 2592:
case 2776:
case 1371:
case 1849:
case 3643:
case 3150:
case 1281:
case 3945:
case 2794:
case 1035:
case 1260:
case 1517:
case 713:
case 109:
case 897:
case 592:
case 1394:
case 3533:
case 1852:
case 2889:
case 3380:
case 3017:
case 93:
case 380:
case 2437:
case 1675:
case 3942:
case 1828:
case 1763:
case 247:
case 951:
case 541:
case 892:
case 346:
case 3542:
case 4062:
case 3949:
case 1944:
case 3997:
case 4055:
case 1971:
case 2376:
case 1965:
case 1995:
case 1917:
case 22:
case 3098:
case 1831:
case 4033:
case 3547:
case 2379:
case 948:
case 17:
case 370:
case 3020:
case 1459:
case 1908:
case 2340:
case 1692:
case 2837:
case 1193:
case 2895:
case 2447:
case 566:
case 1776:
case 3231:
case 2989:
case 1956:
case 3139:
case 43:
case 2958:
case 2151:
case 2293:
case 2295:
case 2968:
case 3469:
case 3820:
case 3218:
case 1488:
case 3034:
case 2841:
case 671:
case 3436:
case 458:
case 668:
case 3058:
case 214:
case 1756:
case 430:
case 2741:
case 2820:
case 398:
case 1447:
case 232:
case 2716:
case 2299:
case 1582:
case 915:
case 674:
case 1238:
case 4061:
case 928:
case 2259:
case 1504:
case 1163:
case 2182:
case 3193:
case 3675:
case 504:
case 3800:
case 959:
case 4027:
case 841:
case 207:
case 3382:
case 57:
case 3222:
case 3804:
case 1318:
case 697:
case 738:
case 3338:
case 338:
case 468:
case 379:
case 3771:
case 482:
case 2655:
case 1461:
case 2154:
case 3946:
case 2185:
case 2806:
case 165:
case 905:
case 3478:
case 3550:
case 3107:
case 102:
case 1871:
case 1282:
case 990:
case 2284:
case 3709:
case 3376:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1651222801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,];
var gg_b = "1651222801/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
