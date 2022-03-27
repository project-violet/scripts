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
case 3597:
case 2746:
case 826:
case 1509:
case 3824:
case 288:
case 3924:
case 409:
case 226:
case 1939:
case 1098:
case 2697:
case 2558:
case 3575:
case 3862:
case 638:
case 755:
case 1675:
case 2888:
case 3147:
case 725:
case 1421:
case 3181:
case 559:
case 2491:
case 951:
case 3774:
case 1507:
case 1686:
case 175:
case 724:
case 2979:
case 3367:
case 2160:
case 2502:
case 1980:
case 3707:
case 2774:
case 536:
case 2116:
case 2920:
case 2067:
case 2965:
case 3627:
case 3159:
case 3762:
case 966:
case 2500:
case 3055:
case 3887:
case 214:
case 3479:
case 124:
case 347:
case 2296:
case 414:
case 930:
case 1016:
case 1380:
case 3369:
case 387:
case 4072:
case 1877:
case 1312:
case 1165:
case 534:
case 3318:
case 132:
case 3255:
case 1828:
case 3279:
case 3953:
case 4037:
case 1067:
case 3312:
case 1525:
case 379:
case 3750:
case 3295:
case 3122:
case 1428:
case 1178:
case 1544:
case 2603:
case 90:
case 1631:
case 3963:
case 548:
case 3553:
case 835:
case 291:
case 3695:
case 2629:
case 397:
case 3185:
case 2893:
case 1400:
case 1974:
case 3585:
case 3201:
case 824:
case 2432:
case 2357:
case 2815:
case 2098:
case 3525:
case 866:
case 808:
case 1670:
case 4027:
case 3764:
case 3601:
case 2042:
case 882:
case 934:
case 242:
case 2298:
case 2717:
case 843:
case 4031:
case 2140:
case 1310:
case 3595:
case 1259:
case 3621:
case 443:
case 2981:
case 1044:
case 336:
case 1497:
case 138:
case 806:
case 3333:
case 3195:
case 111:
case 1269:
case 3872:
case 3335:
case 705:
case 2731:
case 773:
case 3892:
case 2561:
case 1791:
case 3041:
case 2358:
case 1638:
case 4035:
case 2702:
case 344:
case 4002:
case 1245:
case 3947:
case 3888:
case 1626:
case 2064:
case 469:
case 2498:
case 1957:
case 692:
case 2848:
case 2855:
case 2036:
case 1260:
case 1517:
case 1955:
case 1678:
case 1322:
case 2320:
case 2957:
case 3076:
case 3411:
case 2050:
case 3973:
case 1866:
case 2712:
case 850:
case 738:
case 3926:
case 205:
case 740:
case 1976:
case 1872:
case 3324:
case 522:
case 2772:
case 3911:
case 1034:
case 2991:
case 1338:
case 1620:
case 91:
case 2109:
case 1375:
case 2529:
case 1174:
case 3129:
case 2390:
case 341:
case 830:
case 499:
case 3818:
case 2862:
case 1764:
case 3866:
case 682:
case 1230:
case 3339:
case 2551:
case 74:
case 3727:
case 818:
case 3382:
case 3209:
case 424:
case 2260:
case 2968:
case 2401:
case 211:
case 3511:
case 674:
case 3215:
case 241:
case 2781:
case 2284:
case 625:
case 3052:
case 75:
case 976:
case 2796:
case 2351:
case 2311:
case 2504:
case 1452:
case 2444:
case 2547:
case 1405:
case 1722:
case 3898:
case 2808:
case 1720:
case 1490:
case 1285:
case 476:
case 447:
case 1116:
case 312:
case 903:
case 3167:
case 1768:
case 96:
case 878:
case 1578:
case 467:
case 2696:
case 1247:
case 68:
case 840:
case 3868:
case 606:
case 143:
case 1454:
case 2555:
case 3269:
case 338:
case 55:
case 1934:
case 427:
case 2637:
case 3588:
case 2877:
case 3602:
case 2200:
case 2988:
case 1991:
case 3477:
case 2648:
case 350:
case 3502:
case 766:
case 1412:
case 3690:
case 3196:
case 2546:
case 3688:
case 624:
case 416:
case 4009:
case 1938:
case 57:
case 3519:
case 2414:
case 2874:
case 3669:
case 1701:
case 2897:
case 3977:
case 642:
case 2276:
case 1945:
case 2878:
case 2227:
case 2145:
case 3497:
case 2265:
case 2202:
case 1465:
case 1690:
case 343:
case 3876:
case 1267:
case 3379:
case 781:
case 822:
case 737:
case 561:
case 2646:
case 3754:
case 2321:
case 4018:
case 1013:
case 3572:
case 744:
case 178:
case 2388:
case 18:
case 2938:
case 289:
case 176:
case 3535:
case 2876:
case 2234:
case 742:
case 1958:
case 3188:
case 982:
case 3825:
case 2329:
case 2242:
case 4066:
case 1439:
case 3870:
case 2047:
case 2949:
case 2828:
case 392:
case 376:
case 1741:
case 2790:
case 1184:
case 889:
case 1512:
case 2941:
case 2856:
case 4024:
case 3929:
case 1821:
case 1142:
case 2496:
case 3065:
case 3019:
case 2372:
case 2409:
case 1553:
case 3315:
case 1863:
case 2647:
case 2560:
case 1249:
case 3017:
case 1687:
case 648:
case 1283:
case 3931:
case 453:
case 943:
case 3027:
case 1616:
case 3394:
case 2685:
case 1004:
case 1576:
case 1195:
case 113:
case 1713:
case 2843:
case 2536:
case 1930:
case 900:
case 2545:
case 3537:
case 3243:
case 407:
case 319:
case 3639:
case 1426:
case 106:
case 1592:
case 1598:
case 232:
case 4028:
case 251:
case 1806:
case 509:
case 372:
case 3200:
case 782:
case 2954:
case 2710:
case 817:
case 2015:
case 3256:
case 3156:
case 2553:
case 318:
case 3214:
case 3933:
case 2418:
case 1274:
case 4033:
case 3113:
case 1848:
case 179:
case 1982:
case 510:
case 3310:
case 3518:
case 3486:
case 221:
case 863:
case 40:
case 2663:
case 788:
case 1584:
case 1783:
case 295:
case 2017:
case 4091:
case 3761:
case 945:
case 2892:
case 3691:
case 2346:
case 3903:
case 2252:
case 3520:
case 3820:
case 1326:
case 3239:
case 28:
case 3191:
case 3958:
case 3543:
case 3744:
case 491:
case 164:
case 36:
case 3304:
case 1850:
case 81:
case 1681:
case 1567:
case 709:
case 1884:
case 2973:
case 2950:
case 2595:
case 1207:
case 365:
case 24:
case 2929:
case 3733:
case 3338:
case 2442:
case 3088:
case 1692:
case 1420:
case 3533:
case 3057:
case 1895:
case 2592:
case 1014:
case 3617:
case 3711:
case 1250:
case 1350:
case 526:
case 3679:
case 756:
case 3756:
case 2946:
case 2775:
case 3408:
case 2266:
case 1643:
case 749:
case 3713:
case 1457:
case 726:
case 1232:
case 3759:
case 3223:
case 2567:
case 2608:
case 658:
case 364:
case 793:
case 329:
case 180:
case 3077:
case 2362:
case 1857:
case 1359:
case 2501:
case 1080:
case 1526:
case 19:
case 3556:
case 3242:
case 2174:
case 2460:
case 3346:
case 3000:
case 2483:
case 337:
case 451:
case 2870:
case 2312:
case 1218:
case 222:
case 2881:
case 1662:
case 1234:
case 3516:
case 2210:
case 1097:
case 2058:
case 1506:
case 2786:
case 4089:
case 3364:
case 3160:
case 1744:
case 270:
case 4034:
case 1229:
case 2016:
case 441:
case 1607:
case 1627:
case 512:
case 2322:
case 919:
case 1257:
case 3735:
case 3121:
case 3526:
case 2080:
case 3583:
case 2352:
case 2901:
case 2071:
case 3648:
case 2980:
case 2002:
case 1389:
case 3357:
case 3847:
case 1328:
case 3999:
case 539:
case 1027:
case 3474:
case 2368:
case 3142:
case 1679:
case 1186:
case 154:
case 3219:
case 246:
case 3907:
case 128:
case 1376:
case 2068:
case 687:
case 927:
case 2375:
case 477:
case 1158:
case 1853:
case 2095:
case 2238:
case 486:
case 2490:
case 322:
case 2725:
case 199:
case 2171:
case 2514:
case 2316:
case 327:
case 245:
case 2976:
case 2224:
case 3904:
case 2783:
case 1475:
case 2880:
case 952:
case 998:
case 2293:
case 1878:
case 997:
case 1124:
case 3042:
case 2836:
case 3074:
case 3966:
case 3546:
case 1455:
case 1052:
case 423:
case 3093:
case 3425:
case 4055:
case 1794:
case 1948:
case 2133:
case 3942:
case 131:
case 66:
case 3085:
case 2871:
case 1311:
case 594:
case 540:
case 2548:
case 3471:
case 3218:
case 3998:
case 1042:
case 2565:
case 645:
case 1837:
case 531:
case 1901:
case 3294:
case 2831:
case 872:
case 3012:
case 2049:
case 2031:
case 1611:
case 1709:
case 2755:
case 2052:
case 1109:
case 1664:
case 677:
case 3732:
case 2757:
case 3282:
case 551:
case 3330:
case 619:
case 2111:
case 2525:
case 1651:
case 3230:
case 507:
case 853:
case 4090:
case 3439:
case 3456:
case 3363:
case 3487:
case 1062:
case 932:
case 4014:
case 1723:
case 3913:
case 2678:
case 1568:
case 3610:
case 2669:
case 3265:
case 3086:
case 640:
case 3099:
case 1336:
case 1143:
case 1182:
case 3676:
case 1427:
case 4004:
case 2753:
case 2446:
case 720:
case 898:
case 2333:
case 1071:
case 1348:
case 838:
case 2461:
case 2309:
case 3646:
case 1414:
case 2:
case 1680:
case 1329:
case 1849:
case 1562:
case 2933:
case 2264:
case 1984:
case 3980:
case 3515:
case 1661:
case 3277:
case 3849:
case 3861:
case 137:
case 4046:
case 4005:
case 706:
case 2079:
case 3927:
case 121:
case 302:
case 762:
case 3234:
case 2544:
case 1308:
case 394:
case 3092:
case 2248:
case 3110:
case 434:
case 3029:
case 1599:
case 276:
case 2364:
case 4025:
case 3800:
case 908:
case 3280:
case 2019:
case 1499:
case 523:
case 437:
case 1688:
case 1658:
case 929:
case 1644:
case 482:
case 438:
case 225:
case 3896:
case 1804:
case 2354:
case 893:
case 1216:
case 2456:
case 2662:
case 3472:
case 2634:
case 1920:
case 984:
case 2092:
case 1609:
case 607:
case 2060:
case 1076:
case 1443:
case 2191:
case 1719:
case 1070:
case 2344:
case 520:
case 1204:
case 1477:
case 2765:
case 3720:
case 3360:
case 452:
case 1053:
case 3081:
case 2588:
case 1628:
case 667:
case 300:
case 1226:
case 340:
case 2730:
case 105:
case 2300:
case 3453:
case 4086:
case 1482:
case 2729:
case 1152:
case 3466:
case 330:
case 1614:
case 1897:
case 3302:
case 1726:
case 2315:
case 1256:
case 1092:
case 3656:
case 1009:
case 1574:
case 3021:
case 2239:
case 1046:
case 3217:
case 166:
case 871:
case 2378:
case 3848:
case 1403:
case 3865:
case 2377:
case 159:
case 2130:
case 2570:
case 355:
case 1280:
case 2150:
case 2542:
case 2589:
case 913:
case 1476:
case 2527:
case 3378:
case 2233:
case 186:
case 2773:
case 815:
case 2093:
case 290:
case 3495:
case 196:
case 1246:
case 2271:
case 702:
case 666:
case 553:
case 827:
case 896:
case 3812:
case 2905:
case 2374:
case 213:
case 2801:
case 786:
case 1570:
case 841:
case 689:
case 2834:
case 3007:
case 3701:
case 2970:
case 1528:
case 1030:
case 1615:
case 3712:
case 114:
case 3391:
case 3586:
case 472:
case 62:
case 3116:
case 1332:
case 2507:
case 53:
case 3954:
case 1928:
case 1029:
case 2173:
case 1100:
case 3433:
case 530:
case 2244:
case 3808:
case 1959:
case 2967:
case 937:
case 3751:
case 2598:
case 1774:
case 3683:
case 3626:
case 3115:
case 3483:
case 555:
case 2873:
case 615:
case 1712:
case 2722:
case 1440:
case 743:
case 2539:
case 2370:
case 2939:
case 2403:
case 149:
case 1037:
case 631:
case 1357:
case 2256:
case 8:
case 4064:
case 2820:
case 2596:
case 1293:
case 266:
case 1179:
case 1132:
case 234:
case 103:
case 3392:
case 2203:
case 1144:
case 3663:
case 2155:
case 1747:
case 1254:
case 3579:
case 2339:
case 1653:
case 1146:
case 2689:
case 374:
case 1393:
case 3033:
case 3071:
case 4076:
case 1566:
case 1082:
case 2913:
case 1977:
case 4056:
case 3030:
case 2993:
case 2159:
case 2457:
case 2129:
case 2724:
case 1781:
case 474:
case 3194:
case 1685:
case 3878:
case 1199:
case 2932:
case 3455:
case 323:
case 3457:
case 4060:
case 3809:
case 955:
case 2365:
case 2708:
case 3708:
case 339:
case 1484:
case 275:
case 2644:
case 828:
case 3264:
case 4006:
case 2236:
case 3013:
case 852:
case 3992:
case 3834:
case 2675:
case 2618:
case 1924:
case 825:
case 3642:
case 2393:
case 3398:
case 1066:
case 2273:
case 1909:
case 3576:
case 2959:
case 2028:
case 1442:
case 1742:
case 1716:
case 3143:
case 2581:
case 3946:
case 3144:
case 2167:
case 1240:
case 483:
case 633:
case 1210:
case 3959:
case 1489:
case 473:
case 1213:
case 2220:
case 1563:
case 2945:
case 3410:
case 3237:
case 2411:
case 2655:
case 2961:
case 3447:
case 3484:
case 697:
case 3026:
case 2319:
case 3358:
case 1324:
case 273:
case 3916:
case 3165:
case 3983:
case 3252:
case 2600:
case 3380:
case 747:
case 1513:
case 1522:
case 3753:
case 2142:
case 3880:
case 2057:
case 3854:
case 3668:
case 964:
case 1266:
case 1101:
case 1415:
case 2958:
case 3620:
case 2737:
case 768:
case 1288:
case 3899:
case 2087:
case 601:
case 3605:
case 3940:
case 1622:
case 2435:
case 2829:
case 922:
case 1807:
case 2784:
case 43:
case 4000:
case 533:
case 950:
case 3614:
case 168:
case 3399:
case 462:
case 2782:
case 1470:
case 1130:
case 3814:
case 3126:
case 2018:
case 1913:
case 1437:
case 152:
case 3512:
case 3777:
case 668:
case 4038:
case 3789:
case 2075:
case 73:
case 187:
case 2044:
case 3278:
case 1299:
case 1438:
case 2230:
case 3749:
case 663:
case 761:
case 2115:
case 1065:
case 1203:
case 2305:
case 1325:
case 1751:
case 2830:
case 1200:
case 2610:
case 3772:
case 954:
case 3491:
case 2292:
case 87:
case 2162:
case 494:
case 185:
case 4032:
case 1759:
case 3922:
case 1539:
case 626:
case 1033:
case 3619:
case 3168:
case 2727:
case 272:
case 796:
case 3171:
case 2636:
case 2568:
case 2452:
case 1434:
case 2268:
case 1320:
case 2754:
case 3722:
case 3248:
case 1035:
case 3769:
case 1385:
case 2711:
case 1770:
case 3189:
case 3883:
case 3928:
case 95:
case 547:
case 2419:
case 1999:
case 2580:
case 651:
case 2455:
case 501:
case 588:
case 1874:
case 1255:
case 654:
case 292:
case 2158:
case 3548:
case 1784:
case 297:
case 2846:
case 4012:
case 439:
case 489:
case 2684:
case 3442:
case 3467:
case 1975:
case 1010:
case 910:
case 802:
case 2550:
case 1314:
case 1523:
case 3557:
case 148:
case 3508:
case 578:
case 3703:
case 1162:
case 3644:
case 264:
case 691:
case 3590:
case 3043:
case 1809:
case 332:
case 393:
case 3952:
case 987:
case 1711:
case 1654:
case 1990:
case 411:
case 4065:
case 3053:
case 800:
case 1171:
case 2628:
case 789:
case 1703:
case 2583:
case 1798:
case 3366:
case 1602:
case 2138:
case 2392:
case 894:
case 2902:
case 3132:
case 1469:
case 807:
case 384:
case 4067:
case 2013:
case 2794:
case 2849:
case 2172:
case 2909:
case 3555:
case 208:
case 1630:
case 765:
case 1554:
case 3612:
case 2640:
case 1950:
case 1936:
case 468:
case 1239:
case 488:
case 1211:
case 2522:
case 3337:
case 928:
case 2394:
case 1384:
case 3355:
case 748:
case 2642:
case 1271:
case 1358:
case 938:
case 1335:
case 1107:
case 582:
case 700:
case 2088:
case 454:
case 3687:
case 2197:
case 1331:
case 2286:
case 2275:
case 1583:
case 857:
case 1915:
case 2767:
case 3640:
case 1610:
case 2841:
case 876:
case 1321:
case 259:
case 4075:
case 1773:
case 1861:
case 479:
case 3461:
case 794:
case 3949:
case 1585:
case 1298:
case 458:
case 2240:
case 1998:
case 1730:
case 1:
case 1858:
case 3869:
case 3128:
case 1875:
case 305:
case 2413:
case 2053:
case 3584:
case 3782:
case 3775:
case 2037:
case 2511:
case 2951:
case 2381:
case 1641:
case 2756:
case 2971:
case 1942:
case 2800:
case 88:
case 3299:
case 854:
case 3047:
case 912:
case 243:
case 3082:
case 97:
case 3624:
case 1419:
case 30:
case 2649:
case 1571:
case 960:
case 1094:
case 3134:
case 1847:
case 1018:
case 1093:
case 1811:
case 1925:
case 457:
case 1251:
case 3569:
case 2083:
case 2766:
case 3787:
case 2373:
case 4068:
case 3890:
case 311:
case 459:
case 4049:
case 2063:
case 1640:
case 2423:
case 3004:
case 4043:
case 1639:
case 413:
case 2107:
case 254:
case 1516:
case 3454:
case 1436:
case 389:
case 1363:
case 1387:
case 3046:
case 3908:
case 3831:
case 3376:
case 1724:
case 399:
case 2479:
case 2623:
case 133:
case 618:
case 3832:
case 3409:
case 2994:
case 772:
case 92:
case 1550:
case 963:
case 2840:
case 1647:
case 3987:
case 962:
case 71:
case 703:
case 3024:
case 1498:
case 2416:
case 1543:
case 2632:
case 0:
case 1281:
case 3650:
case 3943:
case 3208:
case 1969:
case 2985:
case 3629:
case 3781:
case 1290:
case 2143:
case 3298:
case 902:
case 1181:
case 2043:
case 2343:
case 741:
case 2627:
case 1081:
case 2531:
case 79:
case 764:
case 3666:
case 2889:
case 2585:
case 2839:
case 1189:
case 2137:
case 4011:
case 1985:
case 2139:
case 3306:
case 1433:
case 435:
case 2785:
case 2867:
case 2039:
case 12:
case 861:
case 3285:
case 3482:
case 3864:
case 2151:
case 848:
case 144:
case 1508:
case 1918:
case 1150:
case 3939:
case 2489:
case 2986:
case 517:
case 2128:
case 1153:
case 1953:
case 1900:
case 2860:
case 2653:
case 2221:
case 1555:
case 3839:
case 2232:
case 3106:
case 592:
case 2430:
case 3558:
case 2353:
case 2706:
case 371:
case 1600:
case 2887:
case 3233:
case 3462:
case 1706:
case 2718:
case 1349:
case 3286:
case 151:
case 3936:
case 2574:
case 2245:
case 2055:
case 935:
case 803:
case 3309:
case 1868:
case 3747:
case 2758:
case 3241:
case 1845:
case 3387:
case 2326:
case 1377:
case 630:
case 2992:
case 2810:
case 1891:
case 612:
case 286:
case 2123:
case 833:
case 2412:
case 2458:
case 845:
case 3207:
case 2686:
case 33:
case 1197:
case 2040:
case 2199:
case 3505:
case 1894:
case 821:
case 358:
case 3048:
case 2295:
case 1632:
case 3449:
case 745:
case 356:
case 3063:
case 283:
case 2406:
case 420:
case 1248:
case 3988:
case 639:
case 1494:
case 1351:
case 3598:
case 1886:
case 856:
case 2497:
case 2984:
case 2187:
case 521:
case 1551:
case 362:
case 1360:
case 436:
case 429:
case 3559:
case 969:
case 3135:
case 3501:
case 3517:
case 3396:
case 239:
case 446:
case 598:
case 1015:
case 1856:
case 2749:
case 2402:
case 4087:
case 2215:
case 1223:
case 61:
case 65:
case 174:
case 1055:
case 2833:
case 1593:
case 1729:
case 478:
case 3718:
case 2926:
case 981:
case 1191:
case 1173:
case 983:
case 3840:
case 3957:
case 1172:
case 2178:
case 10:
case 2425:
case 3723:
case 3823:
case 1284:
case 3509:
case 2626:
case 3448:
case 3797:
case 1890:
case 1504:
case 1518:
case 4020:
case 101:
case 621:
case 3632:
case 770:
case 3140:
case 613:
case 3673:
case 986:
case 402:
case 361:
case 2470:
case 401:
case 2235:
case 1746:
case 3964:
case 2426:
case 3906:
case 3060:
case 3730:
case 4074:
case 1416:
case 1418:
case 933:
case 1519:
case 3175:
case 2564:
case 342:
case 2149:
case 9:
case 4054:
case 1951:
case 1241:
case 1371:
case 2144:
case 656:
case 3352:
case 1700:
case 515:
case 2448:
case 1090:
case 67:
case 1717:
case 680:
case 3463:
case 4078:
case 2168:
case 3560:
case 972:
case 415:
case 1334:
case 3104:
case 1237:
case 2518:
case 3902:
case 3407:
case 2437:
case 1671:
case 3623:
case 688:
case 1529:
case 1435:
case 3395:
case 1087:
case 1789:
case 1970:
case 3653:
case 3938:
case 887:
case 2520:
case 3420:
case 2209:
case 3157:
case 3780:
case 2969:
case 650:
case 810:
case 3765:
case 2942:
case 3935:
case 2989:
case 2030:
case 3169:
case 3856:
case 2664:
case 3180:
case 2431:
case 3084:
case 1355:
case 970:
case 2698:
case 783:
case 1577:
case 390:
case 4093:
case 1682:
case 2165:
case 769:
case 2289:
case 3539:
case 704:
case 100:
case 2890:
case 3853:
case 949:
case 2153:
case 2218:
case 1649:
case 699:
case 2301:
case 1187:
case 1947:
case 293:
case 263:
case 3855:
case 2004:
case 3034:
case 382:
case 1397:
case 891:
case 2285:
case 3202:
case 3326:
case 3577:
case 2078:
case 1169:
case 3740:
case 1225:
case 3693:
case 2593:
case 210:
case 2960:
case 3028:
case 503:
case 146:
case 1231:
case 3788:
case 3544:
case 2169:
case 3910:
case 4080:
case 1448:
case 3238:
case 1552:
case 1753:
case 3599:
case 2896:
case 3083:
case 1025:
case 3050:
case 3886:
case 899:
case 2157:
case 3934:
case 3961:
case 2122:
case 1846:
case 3715:
case 636:
case 1096:
case 1797:
case 1163:
case 1196:
case 2687:
case 346:
case 629:
case 3257:
case 2163:
case 1478:
case 60:
case 2267:
case 3290:
case 2086:
case 1652:
case 3991:
case 3341:
case 3049:
case 3641:
case 3155:
case 2193:
case 1411:
case 3349:
case 140:
case 1279:
case 1735:
case 604:
case 708:
case 3530:
case 3444:
case 643:
case 369:
case 1492:
case 487:
case 1432:
case 428:
case 235:
case 614:
case 1994:
case 4021:
case 3066:
case 1463:
case 2201:
case 593:
case 3659:
case 3150:
case 3072:
case 1727:
case 3412:
case 2332:
case 672:
case 107:
case 2584:
case 1117:
case 1755:
case 3881:
case 4026:
case 2723:
case 678:
case 2931:
case 1049:
case 1777:
case 3334:
case 3403:
case 123:
case 2336:
case 2281:
case 1816:
case 2503:
case 464:
case 3193:
case 1694:
case 3137:
case 1914:
case 1012:
case 2117:
case 2112:
case 3799:
case 2499:
case 936:
case 2258:
case 2007:
case 1058:
case 267:
case 1039:
case 1968:
case 2436:
case 1851:
case 1134:
case 1295:
case 568:
case 1790:
case 500:
case 2243:
case 2512:
case 3308:
case 1323:
case 3696:
case 2477:
case 3819:
case 2008:
case 1892:
case 3289:
case 310:
case 2208:
case 832:
case 3724:
case 584:
case 3746:
case 571:
case 2792:
case 3250:
case 257:
case 1352:
case 1036:
case 1192:
case 385:
case 93:
case 3806:
case 776:
case 3401:
case 1561:
case 2506:
case 421:
case 460:
case 2693:
case 3244:
case 3458:
case 3452:
case 3164:
case 3608:
case 3291:
case 2998:
case 3205:
case 1973:
case 2349:
case 2661:
case 1881:
case 89:
case 3301:
case 244:
case 3114:
case 130:
case 1402:
case 2927:
case 3397:
case 396:
case 3100:
case 3372:
case 3736:
case 505:
case 135:
case 3897:
case 3002:
case 2809:
case 3070:
case 2105:
case 999:
case 1786:
case 3343:
case 1445:
case 471:
case 3810:
case 649:
case 3647:
case 2875:
case 3183:
case 408:
case 2189:
case 1558:
case 2590:
case 1542:
case 3662:
case 2125:
case 2204:
case 513:
case 635:
case 3253:
case 3416:
case 565:
case 1659:
case 2930:
case 3680:
case 2198:
case 2606:
case 780:
case 2152:
case 1961:
case 1931:
case 2695:
case 265:
case 3674:
case 721:
case 1624:
case 1912:
case 3292:
case 212:
case 847:
case 1572:
case 335:
case 3725:
case 4017:
case 3637:
case 3494:
case 611:
case 4029:
case 20:
case 50:
case 632:
case 2097:
case 1214:
case 3162:
case 2822:
case 2462:
case 883:
case 3492:
case 2072:
case 1381:
case 3213:
case 282:
case 2251:
case 1366:
case 3771:
case 3990:
case 3784:
case 2484:
case 1691:
case 3035:
case 2818:
case 2615:
case 3245:
case 2323:
case 1612:
case 3652:
case 3254:
case 767:
case 353:
case 1485:
case 4061:
case 3388:
case 299:
case 1674:
case 2549:
case 2554:
case 2582:
case 173:
case 3912:
case 1069:
case 1404:
case 4095:
case 2175:
case 2102:
case 112:
case 2987:
case 511:
case 514:
case 3527:
case 2861:
case 2096:
case 1461:
case 1986:
case 693:
case 669:
case 3783:
case 2826:
case 3895:
case 3184:
case 2494:
case 250:
case 566:
case 238:
case 3426:
case 368:
case 2635:
case 2805:
case 2798:
case 3817:
case 2070:
case 2911:
case 2761:
case 1091:
case 2486:
case 2999:
case 3389:
case 1227:
case 2465:
case 3603:
case 1888:
case 456:
case 1738:
case 2023:
case 3697:
case 2975:
case 2399:
case 2857:
case 315:
case 3945:
case 3681:
case 2404:
case 3655:
case 1017:
case 170:
case 223:
case 2341:
case 2556:
case 2247:
case 508:
case 3545:
case 77:
case 1456:
case 1270:
case 2638:
case 1907:
case 3538:
case 3386:
case 3174:
case 3251:
case 1839:
case 3211:
case 1011:
case 3969:
case 2763:
case 791:
case 3158:
case 1110:
case 3347:
case 52:
case 2014:
case 1372:
case 710:
case 2575:
case 412:
case 968:
case 183:
case 1307:
case 1954:
case 2024:
case 2290:
case 1238:
case 2995:
case 3609:
case 1693:
case 2026:
case 778:
case 2966:
case 2466:
case 3151:
case 378:
case 2000:
case 3475:
case 2900:
case 1802:
case 1604:
case 3506:
case 599:
case 1395:
case 3371:
case 4069:
case 59:
case 1831:
case 2912:
case 2166:
case 1825:
case 1154:
case 2974:
case 4050:
case 98:
case 1710:
case 1051:
case 2530:
case 3767:
case 2643:
case 1258:
case 3210:
case 3139:
case 1952:
case 2429:
case 3521:
case 2313:
case 2519:
case 3752:
case 602:
case 465:
case 2817:
case 3336:
case 570:
case 2222:
case 2441:
case 3628:
case 3965:
case 2217:
case 147:
case 2099:
case 3709:
case 3874:
case 2847:
case 1547:
case 1899:
case 1919:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1648422001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,];
var gg_b = "1648422001/";

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
