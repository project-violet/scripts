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
case 3012:
case 2455:
case 652:
case 3089:
case 3169:
case 1074:
case 1647:
case 669:
case 446:
case 3049:
case 203:
case 1444:
case 183:
case 4031:
case 2408:
case 3917:
case 612:
case 1270:
case 1472:
case 3903:
case 877:
case 2149:
case 1115:
case 2765:
case 770:
case 1295:
case 306:
case 3682:
case 2753:
case 767:
case 783:
case 973:
case 2297:
case 2218:
case 187:
case 2959:
case 537:
case 3279:
case 957:
case 133:
case 169:
case 2040:
case 578:
case 1084:
case 3676:
case 109:
case 3770:
case 1773:
case 1863:
case 3519:
case 1463:
case 1023:
case 3963:
case 3014:
case 3751:
case 1007:
case 3972:
case 2734:
case 3515:
case 739:
case 1623:
case 1374:
case 1048:
case 1318:
case 1718:
case 1504:
case 1178:
case 3802:
case 2521:
case 1099:
case 1599:
case 3069:
case 14:
case 3271:
case 358:
case 2659:
case 3830:
case 826:
case 2081:
case 3694:
case 3582:
case 3471:
case 3059:
case 2567:
case 577:
case 2194:
case 3718:
case 1628:
case 2899:
case 3291:
case 1678:
case 932:
case 1724:
case 2912:
case 1523:
case 174:
case 3678:
case 510:
case 1916:
case 391:
case 2604:
case 3433:
case 3266:
case 227:
case 3653:
case 1590:
case 2971:
case 162:
case 1715:
case 3621:
case 2570:
case 1058:
case 4063:
case 1642:
case 2201:
case 1956:
case 935:
case 342:
case 2841:
case 496:
case 269:
case 3603:
case 3652:
case 2640:
case 4085:
case 2548:
case 3096:
case 1506:
case 3928:
case 3638:
case 1739:
case 3210:
case 2462:
case 1864:
case 1458:
case 3408:
case 974:
case 2913:
case 988:
case 3131:
case 1388:
case 2976:
case 2380:
case 2847:
case 1154:
case 3844:
case 2225:
case 1825:
case 1172:
case 4008:
case 248:
case 325:
case 3493:
case 3549:
case 2744:
case 2206:
case 2482:
case 3107:
case 3821:
case 3920:
case 780:
case 3825:
case 660:
case 1979:
case 875:
case 3717:
case 3035:
case 735:
case 1587:
case 3783:
case 530:
case 804:
case 4093:
case 1636:
case 1682:
case 2683:
case 3072:
case 792:
case 884:
case 3362:
case 1456:
case 1017:
case 850:
case 2623:
case 157:
case 1631:
case 2050:
case 1721:
case 1235:
case 1179:
case 1111:
case 3572:
case 2984:
case 2625:
case 3376:
case 1892:
case 1697:
case 2436:
case 1152:
case 1680:
case 668:
case 2900:
case 2716:
case 4071:
case 3255:
case 3957:
case 2082:
case 2896:
case 164:
case 2935:
case 2575:
case 2758:
case 88:
case 2448:
case 2650:
case 2956:
case 356:
case 965:
case 1035:
case 125:
case 258:
case 3788:
case 1633:
case 2468:
case 563:
case 474:
case 2148:
case 3420:
case 3910:
case 3357:
case 370:
case 1691:
case 2641:
case 1834:
case 2409:
case 713:
case 1696:
case 2963:
case 985:
case 1028:
case 70:
case 2452:
case 2345:
case 1072:
case 616:
case 3562:
case 1671:
case 975:
case 430:
case 3739:
case 3721:
case 2317:
case 3415:
case 2692:
case 2393:
case 1856:
case 2296:
case 3091:
case 3396:
case 1009:
case 413:
case 113:
case 2294:
case 1157:
case 1142:
case 2460:
case 2671:
case 3869:
case 1266:
case 3448:
case 590:
case 2908:
case 1613:
case 2673:
case 226:
case 3316:
case 3222:
case 726:
case 30:
case 2157:
case 2089:
case 214:
case 4091:
case 1294:
case 1043:
case 1353:
case 4062:
case 1103:
case 1668:
case 2440:
case 2540:
case 772:
case 3981:
case 150:
case 2909:
case 193:
case 3359:
case 60:
case 3574:
case 1756:
case 615:
case 479:
case 3913:
case 2203:
case 2129:
case 3447:
case 1829:
case 960:
case 2674:
case 604:
case 481:
case 683:
case 210:
case 1850:
case 4082:
case 2723:
case 955:
case 1387:
case 2056:
case 3337:
case 2981:
case 2888:
case 3958:
case 1285:
case 1700:
case 2283:
case 3842:
case 2268:
case 1452:
case 2587:
case 2635:
case 460:
case 3636:
case 2694:
case 842:
case 701:
case 1962:
case 3051:
case 23:
case 881:
case 1351:
case 3077:
case 2710:
case 476:
case 613:
case 3876:
case 3886:
case 3669:
case 2023:
case 1991:
case 2134:
case 1120:
case 1832:
case 3642:
case 1978:
case 274:
case 2146:
case 3956:
case 1213:
case 3556:
case 4047:
case 3731:
case 2553:
case 166:
case 2216:
case 2055:
case 854:
case 462:
case 1542:
case 3914:
case 305:
case 4032:
case 2266:
case 2685:
case 1695:
case 1436:
case 3801:
case 2426:
case 1377:
case 1535:
case 732:
case 376:
case 1093:
case 2923:
case 3839:
case 3500:
case 3146:
case 466:
case 405:
case 2274:
case 2724:
case 3514:
case 3782:
case 2704:
case 3970:
case 2303:
case 2883:
case 506:
case 2735:
case 1237:
case 1672:
case 1903:
case 3606:
case 3900:
case 2333:
case 228:
case 2305:
case 1224:
case 3054:
case 220:
case 1275:
case 1420:
case 3233:
case 3078:
case 3763:
case 2564:
case 464:
case 2885:
case 2743:
case 2797:
case 1560:
case 2245:
case 1795:
case 751:
case 667:
case 1839:
case 3043:
case 465:
case 2437:
case 3136:
case 4054:
case 692:
case 3787:
case 2069:
case 2147:
case 1132:
case 969:
case 2980:
case 3442:
case 3836:
case 717:
case 572:
case 1041:
case 3949:
case 1337:
case 263:
case 4024:
case 3987:
case 2677:
case 1705:
case 744:
case 1551:
case 1315:
case 1317:
case 2771:
case 4061:
case 152:
case 2768:
case 2065:
case 2719:
case 3152:
case 1379:
case 3174:
case 685:
case 2985:
case 2207:
case 2209:
case 2078:
case 27:
case 1234:
case 2447:
case 2566:
case 427:
case 775:
case 2492:
case 1300:
case 2290:
case 674:
case 562:
case 1272:
case 1624:
case 684:
case 1549:
case 1799:
case 724:
case 2356:
case 867:
case 3622:
case 1385:
case 2637:
case 2261:
case 573:
case 1873:
case 3073:
case 1914:
case 2413:
case 2191:
case 2003:
case 786:
case 1046:
case 982:
case 545:
case 2824:
case 1239:
case 7:
case 1575:
case 2037:
case 3762:
case 3417:
case 1659:
case 39:
case 1252:
case 3495:
case 2212:
case 4074:
case 3672:
case 3912:
case 3846:
case 2168:
case 2019:
case 592:
case 2501:
case 3816:
case 2459:
case 3134:
case 682:
case 2054:
case 2736:
case 1797:
case 1089:
case 3995:
case 3612:
case 2672:
case 3779:
case 2851:
case 177:
case 266:
case 323:
case 1848:
case 3992:
case 451:
case 801:
case 20:
case 2252:
case 2391:
case 1727:
case 2595:
case 2822:
case 764:
case 3665:
case 3579:
case 1716:
case 1312:
case 1792:
case 552:
case 2717:
case 292:
case 349:
case 1601:
case 3017:
case 1736:
case 655:
case 416:
case 1160:
case 3835:
case 1334:
case 1378:
case 328:
case 3478:
case 101:
case 2565:
case 1203:
case 4051:
case 2782:
case 2028:
case 2014:
case 425:
case 2759:
case 1127:
case 1185:
case 511:
case 950:
case 121:
case 1403:
case 15:
case 961:
case 233:
case 2950:
case 2085:
case 626:
case 2939:
case 2646:
case 1544:
case 2898:
case 1622:
case 2446:
case 1361:
case 2044:
case 1651:
case 347:
case 2621:
case 1036:
case 2112:
case 3229:
case 1342:
case 3544:
case 77:
case 2418:
case 1100:
case 4078:
case 175:
case 196:
case 2579:
case 722:
case 3973:
case 3027:
case 3257:
case 3352:
case 315:
case 771:
case 2309:
case 3062:
case 2806:
case 2458:
case 976:
case 9:
case 2803:
case 2890:
case 2644:
case 794:
case 922:
case 1977:
case 2388:
case 173:
case 2539:
case 279:
case 4080:
case 2416:
case 1496:
case 2895:
case 971:
case 76:
case 2221:
case 2208:
case 1738:
case 2319:
case 1243:
case 284:
case 3247:
case 3258:
case 600:
case 2403:
case 3318:
case 192:
case 689:
case 3713:
case 2654:
case 3792:
case 2509:
case 721:
case 632:
case 2039:
case 566:
case 2669:
case 1106:
case 1302:
case 4075:
case 2713:
case 923:
case 1278:
case 531:
case 3355:
case 1930:
case 2318:
case 810:
case 384:
case 2449:
case 1063:
case 3974:
case 2503:
case 507:
case 3167:
case 659:
case 3539:
case 246:
case 2953:
case 1229:
case 3161:
case 943:
case 1375:
case 4022:
case 895:
case 1069:
case 352:
case 1250:
case 1397:
case 2152:
case 2596:
case 2314:
case 1297:
case 3392:
case 2269:
case 2361:
case 3887:
case 2295:
case 1861:
case 1803:
case 2062:
case 840:
case 1483:
case 3040:
case 3628:
case 1676:
case 2869:
case 3504:
case 567:
case 898:
case 1073:
case 1780:
case 588:
case 1937:
case 2624:
case 236:
case 238:
case 1495:
case 1414:
case 862:
case 285:
case 2383:
case 2275:
case 291:
case 1709:
case 3026:
case 3083:
case 1750:
case 2272:
case 1882:
case 3613:
case 2514:
case 3726:
case 3759:
case 1580:
case 4094:
case 2617:
case 100:
case 359:
case 2366:
case 399:
case 3358:
case 385:
case 1033:
case 4013:
case 3067:
case 3033:
case 2693:
case 1332:
case 553:
case 2240:
case 2839:
case 3760:
case 2396:
case 3280:
case 1652:
case 3025:
case 901:
case 2527:
case 583:
case 709:
case 2931:
case 490:
case 1433:
case 3709:
case 1567:
case 2670:
case 1878:
case 147:
case 3738:
case 3741:
case 3696:
case 2330:
case 1409:
case 4039:
case 2463:
case 3729:
case 1925:
case 1052:
case 559:
case 1077:
case 3190:
case 3711:
case 3154:
case 34:
case 894:
case 2229:
case 2108:
case 2559:
case 2133:
case 3205:
case 314:
case 1746:
case 199:
case 1004:
case 176:
case 1997:
case 664:
case 2284:
case 2012:
case 2343:
case 823:
case 1247:
case 84:
case 1605:
case 1497:
case 1260:
case 1656:
case 3178:
case 3494:
case 3170:
case 1338:
case 3194:
case 371:
case 3322:
case 702:
case 1412:
case 2515:
case 2852:
case 2387:
case 1794:
case 3307:
case 2884:
case 1116:
case 3031:
case 1240:
case 1105:
case 3289:
case 1228:
case 1118:
case 3458:
case 1819:
case 3894:
case 942:
case 3060:
case 407:
case 118:
case 591:
case 3773:
case 1658:
case 3609:
case 1597:
case 3941:
case 1464:
case 785:
case 1690:
case 167:
case 441:
case 3006:
case 435:
case 2265:
case 1723:
case 4029:
case 2585:
case 445:
case 3610:
case 96:
case 2211:
case 1758:
case 1314:
case 106:
case 2185:
case 2430:
case 3276:
case 593:
case 195:
case 1842:
case 75:
case 3518:
case 3650:
case 795:
case 3481:
case 2500:
case 2441:
case 3340:
case 3983:
case 1733:
case 1435:
case 2726:
case 2569:
case 2940:
case 440:
case 16:
case 244:
case 3453:
case 3714:
case 2300:
case 3473:
case 242:
case 3384:
case 2790:
case 2197:
case 527:
case 40:
case 319:
case 2471:
case 599:
case 3754:
case 78:
case 595:
case 2156:
case 161:
case 3858:
case 3565:
case 1128:
case 318:
case 3929:
case 2794:
case 914:
case 277:
case 3441:
case 1487:
case 302:
case 1969:
case 576:
case 1076:
case 602:
case 3346:
case 4088:
case 2454:
case 1520:
case 3602:
case 2511:
case 1615:
case 920:
case 3898:
case 3818:
case 2202:
case 1619:
case 3219:
case 3686:
case 1662:
case 3000:
case 2307:
case 3826:
case 1771:
case 434:
case 1434:
case 2916:
case 3673:
case 3457:
case 2699:
case 605:
case 781:
case 4043:
case 3724:
case 2867:
case 1002:
case 2534:
case 697:
case 37:
case 3093:
case 2474:
case 2664:
case 3864:
case 2086:
case 3815:
case 1431:
case 4077:
case 256:
case 3685:
case 3118:
case 1029:
case 3175:
case 1862:
case 1911:
case 517:
case 2656:
case 168:
case 3064:
case 737:
case 990:
case 3011:
case 3749:
case 1112:
case 482:
case 2154:
case 3649:
case 1765:
case 2757:
case 2064:
case 3220:
case 2598:
case 2052:
case 1344:
case 1867:
case 415:
case 1123:
case 1117:
case 2119:
case 857:
case 1747:
case 2381:
case 3496:
case 1320:
case 1080:
case 1596:
case 458:
case 3626:
case 3575:
case 1140:
case 2523:
case 2276:
case 3546:
case 3967:
case 103:
case 433:
case 1482:
case 3462:
case 3160:
case 2420:
case 42:
case 2034:
case 1666:
case 3838:
case 719:
case 1767:
case 3889:
case 1254:
case 1014:
case 3137:
case 994:
case 1663:
case 2161:
case 1380:
case 2952:
case 2605:
case 3186:
case 534:
case 4055:
case 1533:
case 276:
case 3226:
case 3188:
case 281:
case 3601:
case 2767:
case 1512:
case 892:
case 2801:
case 3758:
case 206:
case 756:
case 817:
case 3156:
case 2691:
case 2892:
case 171:
case 2789:
case 2911:
case 165:
case 3926:
case 2843:
case 1138:
case 3373:
case 2802:
case 1025:
case 326:
case 2955:
case 1550:
case 2994:
case 1309:
case 1369:
case 847:
case 313:
case 3921:
case 217:
case 297:
case 2752:
case 1365:
case 3633:
case 455:
case 1851:
case 1081:
case 538:
case 85:
case 3446:
case 1486:
case 2689:
case 212:
case 1677:
case 3888:
case 515:
case 2915:
case 2127:
case 3311:
case 1352:
case 3968:
case 3038:
case 589:
case 2563:
case 1102:
case 1987:
case 3461:
case 2506:
case 2292:
case 3353:
case 594:
case 910:
case 2442:
case 978:
case 2461:
case 1946:
case 3444:
case 1963:
case 280:
case 776:
case 312:
case 2848:
case 235:
case 1761:
case 1065:
case 3868:
case 3952:
case 1031:
case 1415:
case 3007:
case 3100:
case 2849:
case 967:
case 1468:
case 2353:
case 643:
case 4016:
case 3798:
case 3681:
case 754:
case 3469:
case 1389:
case 3263:
case 736:
case 1461:
case 3499:
case 758:
case 2255:
case 4038:
case 335:
case 1921:
case 2176:
case 3784:
case 3808:
case 25:
case 3502:
case 565:
case 1485:
case 345:
case 3315:
case 2247:
case 2533:
case 512:
case 3206:
case 734:
case 1006:
case 3185:
case 639:
case 617:
case 2143:
case 2473:
case 1336:
case 637:
case 4059:
case 738:
case 3733:
case 1040:
case 1509:
case 1201:
case 899:
case 3343:
case 779:
case 1391:
case 498:
case 1427:
case 1164:
case 3607:
case 2491:
case 1884:
case 3554:
case 917:
case 839:
case 1209:
case 912:
case 1891:
case 3891:
case 3196:
case 51:
case 153:
case 1688:
case 251:
case 1078:
case 2832:
case 450:
case 2620:
case 1268:
case 3364:
case 2285:
case 695:
case 2204:
case 1061:
case 2522:
case 3443:
case 3580:
case 2324:
case 3979:
case 310:
case 2428:
case 3701:
case 249:
case 3641:
case 760:
case 3984:
case 2718:
case 3484:
case 1896:
case 766:
case 2538:
case 729:
case 654:
case 508:
case 144:
case 390:
case 1450:
case 3922:
case 2830:
case 3423:
case 59:
case 1447:
case 1657:
case 846:
case 2341:
case 3058:
case 2632:
case 1280:
case 3534:
case 1681:
case 3795:
case 414:
case 3094:
case 693:
case 2982:
case 260:
case 3117:
case 1674:
case 179:
case 2992:
case 2555:
case 677:
case 1954:
case 2101:
case 748:
case 2660:
case 940:
case 389:
case 2427:
case 3948:
case 1367:
case 2010:
case 1751:
case 457:
case 3329:
case 2105:
case 2934:
case 3113:
case 1958:
case 3769:
case 3278:
case 503:
case 1313:
case 2791:
case 1562:
case 245:
case 1534:
case 221:
case 3366:
case 1566:
case 1253:
case 1802:
case 1087:
case 2524:
case 3323:
case 2114:
case 4045:
case 1098:
case 1146:
case 2419:
case 421:
case 387:
case 1198:
case 1692:
case 3703:
case 3590:
case 2593:
case 3961:
case 344:
case 556:
case 1005:
case 198:
case 1401:
case 26:
case 3456:
case 3487:
case 808:
case 3521:
case 2571:
case 648:
case 3287:
case 993:
case 3657:
case 3076:
case 2652:
case 1939:
case 2741:
case 4056:
case 1685:
case 4014:
case 1267:
case 2990:
case 564:
case 720:
case 579:
case 3506:
case 31:
case 806:
case 587:
case 3187:
case 3424:
case 1536:
case 1516:
case 1804:
case 2698:
case 1791:
case 1865:
case 2226:
case 21:
case 3256:
case 53:
case 1355:
case 2517:
case 3163:
case 3860:
case 518:
case 1125:
case 3615:
case 3507:
case 394:
case 3748:
case 3942:
case 585:
case 2554:
case 3391:
case 2740:
case 2456:
case 2577:
case 3260:
case 1411:
case 1785:
case 829:
case 831:
case 2246:
case 3365:
case 2762:
case 1824:
case 773:
case 69:
case 3511:
case 1524:
case 2887:
case 1942:
case 2536:
case 333:
case 3666:
case 2279:
case 4004:
case 1912:
case 423:
case 3656:
case 290:
case 2074:
case 966:
case 700:
case 216:
case 3264:
case 1488:
case 454:
case 2611:
case 928:
case 1828:
case 3861:
case 431:
case 132:
case 1564:
case 2925:
case 1968:
case 94:
case 2549:
case 2038:
case 1784:
case 2094:
case 4:
case 1360:
case 907:
case 1489:
case 2179:
case 1217:
case 2306:
case 495:
case 533:
case 4050:
case 3149:
case 3756:
case 3671:
case 1021:
case 1195:
case 1759:
case 2799:
case 336:
case 1876:
case 828:
case 2244:
case 2031:
case 2073:
case 546:
case 1445:
case 1333:
case 782:
case 28:
case 2092:
case 2414:
case 2481:
case 1430:
case 3486:
case 959:
case 4084:
case 2072:
case 4048:
case 3268:
case 980:
case 1591:
case 706:
case 3812:
case 3931:
case 1304:
case 2375:
case 4046:
case 477:
case 2615:
case 298:
case 1952:
case 2933:
case 1910:
case 2518:
case 437:
case 1600:
case 3270:
case 2213:
case 539:
case 1328:
case 644:
case 2469:
case 631:
case 2298:
case 3796:
case 3532:
case 3252:
case 749:
case 3019:
case 816:
case 296:
case 2234:
case 56:
case 2286:
case 1189:
case 1967:
case 3692:
case 3882:
case 1283:
case 2338:
case 1232:
case 596:
case 3024:
case 1047:
case 3508:
case 680:
case 603:
case 3547:
case 607:
case 2773:
case 1922:
case 2568:
case 1702:
case 3244:
case 2783:
case 1880:
case 3712:
case 3455:
case 2537:
case 2868:
case 1071:
case 3892:
case 1000:
case 2937:
case 1507:
case 2804:
case 1473:
case 2098:
case 833:
case 2894:
case 1439:
case 194:
case 3086:
case 921:
case 834:
case 3419:
case 671:
case 1955:
case 2192:
case 1180:
case 1421:
case 128:
case 3517:
case 1161:
case 3608:
case 1222:
case 2645:
case 1660:
case 2048:
case 4042:
case 522:
case 1301:
case 1225:
case 1810:
case 3243:
case 1053:
case 3884:
case 3719:
case 3213:
case 1019:
case 3250:
case 3218:
case 3651:
case 159:
case 958:
case 243:
case 627:
case 1187:
case 3993:
case 1612:
case 3281:
case 411:
case 2613:
case 2745:
case 443:
case 1405:
case 3393:
case 2489:
case 926:
case 3775:
case 1720:
case 2326:
case 2030:
case 2948:
case 1153:
case 3646:
case 3119:
case 2355:
case 3199:
case 2589:
case 793:
case 2288:
case 4010:
case 2775:
case 1635:
case 3999:
case 2368:
case 172:
case 2021:
case 123:
case 3548:
case 2530:
case 3207:
case 2525:
case 13:
case 3857:
case 813:
case 2224:
case 3925:
case 500:
case 1887:
case 2365:
case 2922:
case 889:
case 142:
case 2796:
case 1686:
case 2828:
case 3919:
case 2058:
case 3702:
case 3614:
case 3479:
case 158:
case 3528:
case 2196:
case 2684:
case 3394:
case 3866:
case 1993:
case 681:
case 3351:
case 338:
case 3990:
case 367:
case 418:
case 1310:
case 3065:
case 1354:
case 54:
case 2850:
case 3791:
case 742:
case 2060:
case 3571:
case 1933:
case 52:
case 871:
case 74:
case 2809:
case 3524:
case 3915:
case 2864:
case 2335:
case 3991:
case 3360:
case 2999:
case 1455:
case 3283:
case 2250:
case 2405:
case 2561:
case 2336:
case 424:
case 2200:
case 3778:
case 873:
case 8:
case 2331:
case 2162:
case 3785:
case 1885:
case 2787:
case 2493:
case 1494:
case 1:
case 1001:
case 317:
case 853:
case 2223:
case 2588:
case 3585:
case 2975:
case 1568:
case 1492:
case 2348:
case 1467:
case 3807:
case 3428:
case 505:
case 3211:
case 3664:
case 3242:
case 2027:
case 1879:
case 1062:
case 2115:
case 2450:
case 491:
case 2117:
case 520:
case 3327:
case 830:
case 3320:
case 252:
case 1904:
case 2647:
case 3261:
case 2350:
case 4090:
case 1947:
case 488:
case 201:
case 154:
case 1067:
case 3806:
case 882:
case 3150:
case 2145:
case 1368:
case 2988:
case 3302:
case 2075:
case 264:
case 2979:
case 473:
case 2918:
case 707:
case 3130:
case 2260:
case 2651:
case 2557:
case 2251:
case 2962:
case 1394:
case 3924:
case 609:
case 3272:
case 2362:
case 3087:
case 1843:
case 3906:
case 3939:
case 678:
case 2618:
case 1429:
case 2070:
case 1357:
case 3308:
case 1634:
case 1643:
case 1923:
case 2552:
case 321:
case 3269:
case 3630:
case 294:
case 2972:
case 3246:
case 3110:
case 2513:
case 1645:
case 108:
case 647:
case 716:
case 759:
case 3895:
case 1396:
case 1287:
case 3660:
case 1543:
case 558:
case 1905:
case 2325:
case 1363:
case 2411:
case 4027:
case 2854:
case 3734:
case 733:
case 802:
case 927:
case 304:
case 3595:
case 3558:
case 2453:
case 360:
case 989:
case 3699:
case 1608:
case 859:
case 2187:
case 2235:
case 502:
case 516:
case 3623:
case 330:
case 1113:
case 3708:
case 1760:
case 2093:
case 3501:
case 372:
case 1037:
case 3813:
case 308:
case 1538:
case 3013:
case 1406:
case 2033:
case 3489:
case 2967:
case 1419:
case 35:
case 3611:
case 3418:
case 3046:
case 1901:
case 1684:
case 351:
case 3938:
case 3715:
case 3663:
case 3761:
case 3661:
case 2171:
case 146:
case 3410:
case 2394:
case 1553:
case 467:
case 3730:
case 2438:
case 3553:
case 1075:
case 1938:
case 3960:
case 2748:
case 3648:
case 2668:
case 1593:
case 995:
case 3251:
case 3930:
case 3877:
case 3959:
case 3079:
case 1261:
case 1218:
case 3989:
case 3893:
case 524:
case 1042:
case 3313:
case 4035:
case 393:
case 170:
case 3425:
case 58:
case 3124:
case 3780:
case 2193:
case 1730:
case 4070:
case 3829:
case 231:
case 3374:
case 718:
case 1216:
case 1852:
case 1324:
case 270:
case 1191:
case 3294:
case 1618:
case 2857:
case 3126:
case 2831:
case 3976:
case 1648:
case 3809:
case 1449:
case 3998:
case 3728:
case 3001:
case 2764:
case 3193:
case 3531:
case 2170:
case 1010:
case 3214:
case 2328:
case 3793:
case 273:
case 3945:
case 2379:
case 611:
case 2547:
case 1511:
case 4020:
case 2173:
case 2856:
case 3950:
case 2591:
case 1970:
case 3470:
case 2519:
case 4086:
case 2100:
case 1849:
case 3310:
case 2352:
case 324:
case 3600:
case 3372:
case 45:
case 1927:
case 2897:
case 365:
case 404:
case 998:
case 2770:
case 2057:
case 2780:
case 1183:
case 1571:
case 1883:
case 1576:
case 155:
case 2690:
case 3637:
case 2760:
case 3831:
case 3380:
case 746:
case 4019:
case 3253:
case 2253:
case 1846:
case 670:
case 346:
case 219:
case 1886:
case 3412:
case 3996:
case 3710:
case 3127:
case 1109:
case 3568:
case 3232:
case 2798:
case 2863:
case 2228:
case 3643:
case 2986:
case 3015:
case 1928:
case 3198:
case 1798:
case 2531:
case 1617:
case 3141:
case 1082:
case 1307:
case 3639:
case 2761:
case 3386:
case 740:
case 2264:
case 3431:
case 708:
case 876:
case 752:
case 322:
case 1056:
case 1898:
case 2417:
case 3331:
case 2702:
case 2840:
case 3208:
case 3023:
case 2347:
case 2177:
case 3259:
case 2562:
case 2904:
case 2634:
case 3375:
case 24:
case 1454:
case 68:
case 1570:
case 554:
case 2311:
case 2354:
case 3932:
case 1775:
case 2874:
case 1173:
case 789:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1647734401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,];
var gg_b = "1647734401/";

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
