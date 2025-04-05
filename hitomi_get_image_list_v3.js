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
case 1487:
case 3372:
case 829:
case 723:
case 2129:
case 1298:
case 3304:
case 2859:
case 3169:
case 2337:
case 963:
case 712:
case 1306:
case 148:
case 1363:
case 2018:
case 620:
case 1784:
case 1091:
case 1928:
case 388:
case 1935:
case 2343:
case 3948:
case 1492:
case 233:
case 1689:
case 3781:
case 337:
case 2908:
case 1288:
case 828:
case 437:
case 3665:
case 3377:
case 3791:
case 3084:
case 3512:
case 2326:
case 3361:
case 3420:
case 1086:
case 1783:
case 2638:
case 3882:
case 1549:
case 1794:
case 2117:
case 2625:
case 1109:
case 3030:
case 2460:
case 1820:
case 149:
case 1364:
case 2321:
case 1850:
case 2351:
case 3559:
case 2587:
case 3409:
case 460:
case 2904:
case 3450:
case 3182:
case 3673:
case 3500:
case 2817:
case 670:
case 2356:
case 3286:
case 2972:
case 419:
case 393:
case 2739:
case 2348:
case 2716:
case 21:
case 3197:
case 2680:
case 606:
case 1798:
case 493:
case 4088:
case 2634:
case 1676:
case 3296:
case 45:
case 3192:
case 1958:
case 3674:
case 1667:
case 2903:
case 3779:
case 3602:
case 297:
case 3291:
case 715:
case 3932:
case 3921:
case 744:
case 2540:
case 1941:
case 1469:
case 2966:
case 1788:
case 2812:
case 1946:
case 1924:
case 2449:
case 2961:
case 3926:
case 1560:
case 782:
case 259:
case 3944:
case 1281:
case 1559:
case 4079:
case 3850:
case 2906:
case 3230:
case 3809:
case 1140:
case 2354:
case 1673:
case 3284:
case 1182:
case 3079:
case 3293:
case 3120:
case 2901:
case 1286:
case 160:
case 1088:
case 536:
case 1943:
case 241:
case 2631:
case 193:
case 761:
case 638:
case 2328:
case 2335:
case 1197:
case 2714:
case 3662:
case 3515:
case 3798:
case 2619:
case 921:
case 2627:
case 2115:
case 3676:
case 3958:
case 3294:
case 830:
case 1308:
case 118:
case 3667:
case 600:
case 1779:
case 1602:
case 2849:
case 1921:
case 2964:
case 3788:
case 2016:
case 2039:
case 366:
case 784:
case 578:
case 1944:
case 3560:
case 3895:
case 703:
case 1926:
case 3301:
case 1517:
case 3487:
case 1956:
case 2149:
case 971:
case 2459:
case 3298:
case 867:
case 714:
case 750:
case 2400:
case 2214:
case 2550:
case 3306:
case 3195:
case 1169:
case 2968:
case 2815:
case 348:
case 151:
case 3793:
case 1892:
case 3091:
case 3935:
case 3096:
case 935:
case 2657:
case 894:
case 617:
case 4091:
case 1083:
case 626:
case 3185:
case 2213:
case 2975:
case 1303:
case 996:
case 2358:
case 3288:
case 24:
case 4081:
case 1279:
case 3440:
case 1084:
case 1791:
case 1377:
case 2346:
case 2718:
case 2860:
case 2595:
case 2324:
case 3109:
case 2341:
case 3549:
case 1882:
case 1366:
case 1529:
case 4086:
case 1796:
case 2072:
case 2802:
case 1157:
case 3370:
case 1979:
case 3427:
case 2476:
case 2110:
case 2874:
case 2471:
case 2004:
case 3758:
case 2467:
case 3037:
case 1433:
case 598:
case 62:
case 484:
case 2669:
case 3724:
case 1726:
case 3565:
case 4043:
case 1744:
case 1023:
case 2178:
case 3741:
case 303:
case 2525:
case 3043:
case 2538:
case 3988:
case 1145:
case 1505:
case 522:
case 1455:
case 2268:
case 3617:
case 2701:
case 3125:
case 3138:
case 2003:
case 953:
case 824:
case 1248:
case 3855:
case 3228:
case 3998:
case 3026:
case 1152:
case 2807:
case 3510:
case 2393:
case 1836:
case 3044:
case 2384:
case 2763:
case 3834:
case 1046:
case 1256:
case 2061:
case 1024:
case 3422:
case 361:
case 3431:
case 1251:
case 173:
case 3419:
case 1589:
case 4026:
case 3880:
case 3436:
case 1743:
case 3842:
case 2066:
case 1434:
case 3021:
case 1822:
case 461:
case 3723:
case 2547:
case 3574:
case 3753:
case 3134:
case 1221:
case 2264:
case 1576:
case 1232:
case 4056:
case 1244:
case 1054:
case 3452:
case 1226:
case 3142:
case 2775:
case 3246:
case 1567:
case 3983:
case 632:
case 254:
case 2173:
case 1996:
case 802:
case 2499:
case 1035:
case 3445:
case 4048:
case 269:
case 1991:
case 3155:
case 156:
case 1425:
case 2590:
case 843:
case 3313:
case 504:
case 525:
case 2918:
case 3223:
case 445:
case 414:
case 450:
case 1053:
case 1243:
case 3659:
case 3133:
case 350:
case 2263:
case 2878:
case 3573:
case 3754:
case 621:
case 3930:
case 3314:
case 1237:
case 874:
case 1981:
case 268:
case 1311:
case 3507:
case 2174:
case 5:
case 2768:
case 1615:
case 2534:
case 1562:
case 3984:
case 572:
case 1051:
case 3136:
case 1753:
case 3852:
case 3576:
case 3232:
case 3221:
case 2162:
case 1134:
case 1142:
case 16:
case 3571:
case 3244:
case 1452:
case 3054:
case 3122:
case 2708:
case 804:
case 1048:
case 543:
case 2465:
case 789:
case 947:
case 456:
case 3028:
case 634:
case 3660:
case 502:
case 3991:
case 1445:
case 3438:
case 4035:
case 1313:
case 356:
case 3425:
case 2478:
case 1223:
case 3751:
case 1659:
case 216:
case 114:
case 150:
case 2075:
case 485:
case 312:
case 4053:
case 3857:
case 2171:
case 2410:
case 2204:
case 1930:
case 2889:
case 872:
case 3339:
case 2531:
case 2522:
case 8:
case 574:
case 3986:
case 2536:
case 970:
case 788:
case 1147:
case 1993:
case 3562:
case 1984:
case 3127:
case 3157:
case 1370:
case 2703:
case 2871:
case 2001:
case 3447:
case 2867:
case 1427:
case 718:
case 1847:
case 1037:
case 2876:
case 875:
case 2006:
case 2208:
case 344:
case 1724:
case 1318:
case 831:
case 1746:
case 2063:
case 3744:
case 2391:
case 3599:
case 1565:
case 142:
case 1890:
case 184:
case 3023:
case 2396:
case 415:
case 3721:
case 1629:
case 2105:
case 3732:
case 2545:
case 2766:
case 1988:
case 1043:
case 1253:
case 3490:
case 1741:
case 4058:
case 3145:
case 2772:
case 920:
case 1125:
case 2609:
case 524:
case 1855:
case 3737:
case 255:
case 2199:
case 2650:
case 1235:
case 760:
case 1044:
case 3442:
case 1510:
case 3480:
case 4041:
case 473:
case 1026:
case 3152:
case 1998:
case 1431:
case 2911:
case 3024:
case 3046:
case 2862:
case 2557:
case 2916:
case 2407:
case 3589:
case 3251:
case 3041:
case 4024:
case 663:
case 1723:
case 3822:
case 1021:
case 2685:
case 3434:
case 816:
case 4073:
case 400:
case 2055:
case 3397:
case 3299:
case 3767:
case 1461:
case 2424:
case 2:
case 1320:
case 2832:
case 439:
case 3688:
case 272:
case 3929:
case 476:
case 4007:
case 2080:
case 796:
case 3861:
case 2034:
case 339:
case 3464:
case 3912:
case 2844:
case 2969:
case 2826:
case 376:
case 1806:
case 3804:
case 3551:
case 3387:
case 3074:
case 170:
case 3556:
case 1067:
case 1210:
case 735:
case 4074:
case 2300:
case 1554:
case 1801:
case 3872:
case 2843:
case 2614:
case 569:
case 491:
case 852:
case 771:
case 2722:
case 1175:
case 338:
case 2731:
case 225:
case 204:
case 3108:
case 2033:
case 0:
case 554:
case 914:
case 391:
case 3698:
case 438:
case 2423:
case 1863:
case 827:
case 3762:
case 2143:
case 326:
case 2503:
case 213:
case 2453:
case 3078:
case 3808:
case 257:
case 984:
case 507:
case 855:
case 3475:
case 903:
case 77:
case 1163:
case 49:
case 2561:
case 1524:
case 1395:
case 732:
case 1546:
case 299:
case 3799:
case 2312:
case 1691:
case 3010:
case 3271:
case 2227:
case 2940:
case 3532:
case 3521:
case 1274:
case 3683:
case 3694:
case 1089:
case 3172:
case 3262:
case 877:
case 1164:
case 2121:
case 961:
case 2317:
case 2236:
case 3161:
case 275:
case 3959:
case 2222:
case 2504:
case 3177:
case 2851:
case 2126:
case 2454:
case 1099:
case 2435:
case 1273:
case 2428:
case 648:
case 453:
case 2992:
case 1686:
case 546:
case 2038:
case 4065:
case 298:
case 3630:
case 1523:
case 1385:
case 2848:
case 555:
case 915:
case 944:
case 1808:
case 2123:
case 1078:
case 3875:
case 2853:
case 224:
case 3163:
case 3408:
case 3558:
case 982:
case 2233:
case 3546:
case 3106:
case 3524:
case 1271:
case 3960:
case 734:
case 4089:
case 1526:
case 1799:
case 689:
case 1104:
case 2564:
case 1276:
case 1532:
case 3101:
case 1172:
case 1694:
case 2057:
case 2247:
case 1705:
case 2234:
case 3778:
case 1900:
case 2501:
case 2854:
case 2141:
case 3207:
case 2506:
case 1161:
case 2124:
case 2242:
case 1693:
case 3710:
case 651:
case 3273:
case 3868:
case 1065:
case 320:
case 2448:
case 688:
case 2828:
case 3681:
case 2835:
case 1103:
case 846:
case 3385:
case 2255:
case 2045:
case 3523:
case 1630:
case 2238:
case 347:
case 1776:
case 1073:
case 2135:
case 1397:
case 3702:
case 65:
case 187:
case 2733:
case 868:
case 3461:
case 2154:
case 1382:
case 1929:
case 1866:
case 2444:
case 3477:
case 2432:
case 1861:
case 176:
case 2995:
case 3466:
case 2950:
case 4067:
case 3076:
case 1289:
case 619:
case 1804:
case 1406:
case 2437:
case 2909:
case 4076:
case 1556:
case 3801:
case 3554:
case 3773:
case 1002:
case 3071:
case 693:
case 406:
case 3528:
case 985:
case 2742:
case 3535:
case 202:
case 527:
case 854:
case 1463:
case 923:
case 306:
case 191:
case 1392:
case 2315:
case 3278:
case 763:
case 912:
case 1205:
case 1698:
case 3113:
case 1759:
case 40:
case 597:
case 1700:
case 1654:
case 2097:
case 2188:
case 3656:
case 2486:
case 3648:
case 1331:
case 559:
case 1628:
case 2250:
case 3380:
case 3342:
case 2514:
case 1635:
case 3715:
case 3334:
case 3910:
case 1319:
case 2307:
case 1217:
case 1327:
case 2198:
case 2087:
case 1653:
case 2374:
case 2608:
case 2295:
case 1116:
case 1139:
case 1212:
case 2302:
case 17:
case 3870:
case 2883:
case 2491:
case 2720:
case 2938:
case 3333:
case 841:
case 1418:
case 2925:
case 3390:
case 2513:
case 3965:
case 3818:
case 434:
case 95:
case 51:
case 3760:
case 1717:
case 2194:
case 390:
case 2672:
case 2378:
case 84:
case 770:
case 2955:
case 3118:
case 1586:
case 2898:
case 171:
case 3593:
case 463:
case 2310:
case 2934:
case 1200:
case 3584:
case 1816:
case 2942:
case 3530:
case 673:
case 1259:
case 1049:
case 4012:
case 1357:
case 3814:
case 3902:
case 3260:
case 2130:
case 989:
case 747:
case 2570:
case 865:
case 2220:
case 4017:
case 2184:
case 3813:
case 2677:
case 3644:
case 1712:
case 1591:
case 615:
case 2990:
case 2518:
case 2661:
case 301:
case 2795:
case 3594:
case 1641:
case 294:
case 3583:
case 1345:
case 682:
case 3621:
case 1596:
case 948:
case 190:
case 3717:
case 88:
case 54:
case 435:
case 2305:
case 2191:
case 1118:
case 811:
case 2606:
case 228:
case 335:
case 371:
case 1439:
case 2095:
case 1907:
case 1416:
case 1584:
case 1012:
case 3811:
case 791:
case 3816:
case 1029:
case 1170:
case 2287:
case 1643:
case 2389:
case 3581:
case 2922:
case 163:
case 229:
case 1260:
case 3967:
case 1974:
case 2240:
case 2050:
case 3976:
case 3591:
case 2399:
case 1626:
case 101:
case 3624:
case 642:
case 1338:
case 1583:
case 3641:
case 1594:
case 603:
case 776:
case 3596:
case 3729:
case 292:
case 1632:
case 3759:
case 1651:
case 295:
case 1113:
case 2787:
case 10:
case 1978:
case 897:
case 3654:
case 614:
case 1656:
case 3989:
case 4060:
case 864:
case 2516:
case 2020:
case 2484:
case 3635:
case 1342:
case 2493:
case 3060:
case 562:
case 1598:
case 2362:
case 1334:
case 2668:
case 717:
case 3217:
case 3336:
case 3319:
case 2511:
case 3327:
case 726:
case 1249:
case 3470:
case 3653:
case 1347:
case 2367:
case 2269:
case 2797:
case 37:
case 2371:
case 3212:
case 332:
case 2740:
case 81:
case 1588:
case 1333:
case 4015:
case 2891:
case 541:
case 432:
case 2483:
case 236:
case 2494:
case 3015:
case 2926:
case 2098:
case 464:
case 1429:
case 3977:
case 1011:
case 1039:
case 364:
case 2495:
case 1016:
case 3633:
case 3829:
case 459:
case 1520:
case 3014:
case 162:
case 3540:
case 397:
case 25:
case 821:
case 1218:
case 2308:
case 2296:
case 1627:
case 41:
case 534:
case 2607:
case 3711:
case 3592:
case 643:
case 2485:
case 1335:
case 4013:
case 1714:
case 3642:
case 2197:
case 31:
case 3680:
case 1328:
case 1631:
case 3739:
case 481:
case 1622:
case 3716:
case 3348:
case 2943:
case 3972:
case 1901:
case 260:
case 3356:
case 755:
case 87:
case 1354:
case 2673:
case 740:
case 2281:
case 2559:
case 2937:
case 2409:
case 3587:
case 1417:
case 3460:
case 2030:
case 1645:
case 2366:
case 3638:
case 3625:
case 2840:
case 1341:
case 727:
case 1860:
case 1595:
case 1346:
case 1718:
case 2420:
case 752:
case 3344:
case 967:
case 605:
case 624:
case 14:
case 1652:
case 835:
case 2303:
case 1770:
case 3908:
case 411:
case 237:
case 501:
case 1657:
case 333:
case 2094:
case 1323:
case 288:
case 3415:
case 82:
case 433:
case 251:
case 2786:
case 2169:
case 2951:
case 3239:
case 2304:
case 1400:
case 1214:
case 716:
case 1459:
case 3070:
case 3211:
case 1149:
case 3800:
case 2820:
case 1321:
case 2549:
case 2081:
case 1117:
case 699:
case 3324:
case 1569:
case 3595:
case 3860:
case 710:
case 1326:
case 754:
case 2150:
case 3652:
case 34:
case 2497:
case 2288:
case 3358:
case 622:
case 2953:
case 3213:
case 1908:
case 657:
case 613:
case 133:
case 928:
case 1343:
case 1415:
case 2935:
case 2928:
case 698:
case 2096:
case 631:
case 2793:
case 768:
case 2784:
case 2363:
case 3815:
case 3968:
case 365:
case 2306:
case 1216:
case 2195:
case 1337:
case 1859:
case 2605:
case 2298:
case 3509:
case 2301:
case 159:
case 4016:
case 3429:
case 2895:
case 746:
case 1449:
case 3270:
case 266:
case 462:
case 1159:
case 2946:
case 3520:
case 2788:
case 1829:
case 2941:
case 1100:
case 3849:
case 4011:
case 362:
case 3964:
case 3412:
case 80:
case 2667:
case 2375:
case 521:
case 1647:
case 3353:
case 3627:
case 2676:
case 1711:
case 3963:
case 2368:
case 1634:
case 2515:
case 2798:
case 181:
case 3328:
case 625:
case 1680:
case 1642:
case 3335:
case 2885:
case 995:
case 683:
case 3354:
case 1817:
case 2293:
case 2079:
case 1904:
case 3160:
case 780:
case 3906:
case 978:
case 707:
case 2993:
case 3398:
case 2507:
case 1519:
case 3692:
case 2147:
case 3768:
case 1272:
case 1536:
case 576:
case 1531:
case 368:
case 1167:
case 3580:
case 1204:
case 2728:
case 2314:
case 2600:
case 2754:
case 2573:
case 214:
case 3263:
case 250:
case 1075:
case 116:
case 925:
case 904:
case 2223:
case 3555:
case 3918:
case 538:
case 806:
case 2313:
case 369:
case 2445:
case 410:
case 127:
case 454:
case 2825:
case 3173:
case 3499:
case 2838:
case 3388:
case 3533:
case 2258:
case 2983:
case 1261:
case 1708:
case 870:
case 2246:
case 3775:
case 2180:
case 2452:
case 26:
case 1162:
case 1527:
case 972:
case 2753:
case 2574:
case 3107:
case 3914:
case 3462:
case 2032:
case 2880:
case 1939:
case 1407:
case 975:
case 1557:
case 2842:
case 1862:
case 1911:
case 3061:
case 2510:
case 3393:
case 3807:
case 2998:
case 4066:
case 1473:
case 2235:
case 2228:
case 628:
case 1199:
case 4003:
case 998:
case 2855:
case 480:
case 140:
case 2125:
case 1609:
case 3873:
case 3268:
case 931:
case 2138:
case 380:
case 203:
case 3383:
case 3764:
case 2833:
case 1545:
case 3178:
case 284:
case 1396:
case 957:
case 446:
case 242:
case 2565:
case 1777:
case 2746:
case 913:
case 1695:
case 3669:
case 2724:
case 2758:
case 3874:
case 1402:
case 177:
case 3476:
case 1867:
case 629:
case 2370:
case 4004:
case 3802:
case 2831:
case 1914:
case 3064:
case 3916:
case 3557:
case 2041:
case 2251:
case 3407:
case 3939:
case 781:
case 2024:
case 1061:
case 71:
case 3386:
case 1077:
case 2442:
case 1384:
case 2819:
case 1807:
case 1393:
case 2058:
case 340:
case 1706:
case 355:
case 1268:
case 826:
case 3772:
case 440:
case 455:
case 2490:
case 1538:
case 905:
case 1525:
case 146:
case 3396:
case 2023:
case 3545:
case 2732:
case 1764:
case 2721:
case 4063:
case 3777:
case 2599:
case 3391:
case 2726:
case 3761:
case 1669:
case 244:
case 3208:
case 215:
case 1275:
case 2433:
case 2827:
case 797:
case 4001:
case 1110:
case 1874:
case 2979:
case 667:
case 3703:
case 2447:
case 3474:
case 1398:
case 3176:
case 1534:
case 2615:
case 2127:
case 3536:
case 3272:
case 609:
case 1768:
case 876:
case 1692:
case 2311:
case 3519:
case 1810:
case 3522:
case 3167:
case 1206:
case 3531:
case 2316:
case 2748:
case 1102:
case 3171:
case 1542:
case 2857:
case 3889:
case 3204:
case 3410:
case 212:
case 416:
case 887:
case 1263:
case 1878:
case 1008:
case 800:
case 2751:
case 316:
case 902:
case 4075:
case 3478:
case 1590:
case 1865:
case 3899:
case 452:
case 1918:
case 3203:
case 2425:
case 256:
case 2660:
case 2991:
case 352:
case 3465:
case 2035:
case 1682:
case 1640:
case 427:
case 3620:
case 2845:
case 1533:
case 838:
case 1388:
case 2122:
case 2131:
case 3261:
case 1970:
case 2226:
case 1697:
case 1264:
case 2576:
case 78:
case 570:
case 974:
case 1547:
case 2119:
case 3266:
case 1107:
case 431:
case 2630:
case 542:
case 3848:
case 2103:
case 1835:
case 3757:
case 3038:
case 3025:
case 398:
case 253:
case 1158:
case 844:
case 1448:
case 1563:
case 980:
case 498:
case 3428:
case 665:
case 2177:
case 1280:
case 1052:
case 1242:
case 3126:
case 2161:
case 1146:
case 2959:
case 1506:
case 1451:
case 3572:
case 1501:
case 3236:
case 1854:
case 2262:
case 2900:
case 2705:
case 3132:
case 561:
case 1057:
case 499:
case 3566:
case 779:
case 873:
case 1920:
case 1725:
case 2694:
case 736:
case 3940:
case 1564:
case 2532:
case 3312:
case 2544:
case 2010:
case 2271:
case 2526:
case 3137:
case 2369:
case 2267:
case 1233:
case 64:
case 946:
case 457:
case 124:
case 413:
case 1853:
case 1123:
case 3997:
case 357:
case 2808:
case 226:
case 1290:
case 422:
case 313:
case 404:
case 856:
case 1443:
case 483:
case 2392:
case 1611:
case 1823:
case 3731:
case 238:
case 1616:
case 2463:
case 4090:
case 1742:
case 3843:
case 1985:
case 1780:
case 641:
case 383:
case 4047:
case 1909:
case 2917:
case 2556:
case 3359:
case 2289:
case 2804:
case 2387:
case 3257:
case 3047:
case 3837:
case 1755:
case 1027:
case 3151:
case 1790:
case 3613:
case 276:
case 1995:
case 2007:
case 3826:
case 1019:
case 4080:
case 1360:
case 2861:
case 2912:
case 1421:
case 2464:
case 1432:
case 1444:
case 3042:
case 2929:
case 372:
case 2340:
case 1841:
case 1426:
case 3:
case 1031:
case 174:
case 1022:
case 3446:
case 2688:
case 662:
case 3148:
case 3508:
case 1135:
case 812:
case 2299:
case 2073:
case 3055:
case 2776:
case 885:
case 3727:
case 910:
case 550:
case 729:
case 1238:
case 1747:
case 545:
case 2863:
case 1423:
case 1719:
case 343:
case 681:
case 3153:
case 1736:
case 402:
case 916:
case 61:
case 3639:
case 104:
case 125:
case 1731:
case 183:
case 3780:
case 1843:
case 3985:
case 2535:
case 3742:
case 86:
case 2404:
case 2071:
case 2067:
case 3437:
case 1257:
case 2472:
case 1359:
case 3755:
case 2076:
case 3995:
case 1613:
case 3790:
case 2466:
case 3846:
case 4031:
case 794:
case 4022:
case 3426:
case 4019:
case 172:
case 1042:
case 3444:
case 2320:
case 1832:
case 2864:
case 1446:
case 1821:
case 2949:
case 374:
case 1:
case 814:
case 845:
case 2265:
case 2702:
case 512:
case 952:
case 1055:
case 1245:
case 2774:
case 3238:
case 3225:
case 2403:
case 3045:
case 3255:
case 1848:
case 2523:
case 955:
case 515:
case 1025:
case 803:
case 3835:
case 4045:
case 582:
case 131:
case 2915:
case 2099:
case 1435:
case 1454:
case 3052:
case 3242:
case 1126:
case 3280:
case 1504:
case 2350:
case 1144:
case 1851:
case 1231:
case 1987:
case 4052:
case 1572:
case 3451:
case 1121:
case 3234:
case 3349:
case 2089:
case 2101:
case 3725:
case 2274:
case 3057:
case 1745:
case 1329:
case 1982:
case 977:
case 2202:
case 4057:
case 1577:
case 1312:
case 573:
case 861:
case 1618:
case 2524:
case 1561:
case 2395:
case 1137:
case 2163:
case 324:
case 3233:
case 3853:
case 2005:
case 1997:
case 424:
case 68:
case 405:
case 3290:
case 1670:
case 3888:
case 1664:
case 2632:
case 1085:
case 192:
case 2594:
case 551:
case 3933:
case 2583:
case 3518:
case 1769:
case 98:
case 774:
case 2626:
case 1399:
case 3193:
case 1240:
case 467:
case 2974:
case 3947:
case 2017:
case 1181:
case 3570:
case 3603:
case 677:
case 2260:
case 3130:
case 589:
case 263:
case 2814:
case 2643:
case 3785:
case 1498:
case 3310:
case 2584:
case 3934:
case 2416:
case 2907:
case 1095:
case 1919:
case 3069:
case 1606:
case 640:
case 1191:
case 655:
case 3750:
case 1305:
case 1601:
case 3709:
case 290:
case 3194:
case 1292:
case 3183:
case 2965:
case 408:
case 3092:
case 1891:
case 593:
case 2390:
case 652:
case 2333:
case 3720:
case 234:
case 308:
case 1740:
case 3894:
case 3883:
case 519:
case 1797:
case 2870:
case 2114:
case 3302:
case 3608:
case 3087:
case 2347:
case 2059:
case 2249:
case 964:
case 560:
case 1376:
case 3198:
case 4040:
case 1792:
case 1668:
case 3209:
case 4082:
case 1362:
case 309:
case 2715:
case 2380:
case 1493:
case 1484:
case 3082:
case 3514:
case 1957:
case 3486:
case 1516:
case 2648:
case 409:
case 1539:
case 3188:
case 2656:
case 2978:
case 3285:
case 430:
case 616:
case 518:
case 1496:
case 2015:
case 1513:
case 3483:
case 3896:
case 108:
case 893:
case 1938:
case 2418:
case 1491:
case 436:
case 3740:
case 1302:
case 3371:
case 2579:
case 3797:
case 860:
case 2116:
case 3269:
case 2111:
case 1087:
case 2653:
case 1374:
case 1198:
case 3952:
case 713:
case 962:
case 2336:
case 1209:
case 1884:
case 3668:
case 1481:
case 3511:
case 1893:
case 2060:
case 798:
case 3886:
case 4020:
case 3362:
case 3484:
case 1082:
case 1040:
case 3020:
case 3516:
case 1486:
case 566:
case 3957:
case 130:
case 1188:
case 1097:
case 2905:
case 495:
case 1373:
case 85:
case 3787:
case 94:
case 3085:
case 1888:
case 3664:
case 2729:
case 2413:
case 1933:
case 1666:
case 2641:
case 2624:
case 296:
case 1795:
case 4085:
case 851:
case 2646:
case 1518:
case 1677:
case 2712:
case 3297:
case 7:
case 22:
case 3050:
case 3240:
case 3927:
case 1947:
case 429:
case 1220:
case 73:
case 3879:
case 1130:
case 329:
case 2971:
case 167:
case 2357:
case 3922:
case 3498:
case 4095:
case 2839:
case 2623:
case 1942:
case 1934:
case 2414:
case 549:
case 725:
case 704:
case 271:
case 3936:
case 2586:
case 235:
case 1750:
case 1955:
case 3305:
case 428:
case 607:
case 3292:
case 1194:
case 680:
case 3601:
case 1672:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1743850802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,];
var gg_b = "1743850802/";

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
