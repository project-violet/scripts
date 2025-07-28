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
case 3206:
case 2742:
case 2653:
case 3322:
case 3498:
case 3486:
case 32:
case 620:
case 1739:
case 648:
case 1134:
case 1256:
case 1925:
case 1348:
case 2419:
case 3312:
case 501:
case 1194:
case 2594:
case 1008:
case 917:
case 477:
case 3557:
case 1507:
case 3438:
case 3991:
case 3262:
case 2790:
case 2578:
case 1178:
case 332:
case 1420:
case 4016:
case 2853:
case 3371:
case 227:
case 2730:
case 331:
case 45:
case 968:
case 405:
case 1046:
case 1888:
case 2987:
case 3778:
case 3965:
case 13:
case 3248:
case 3356:
case 1836:
case 1306:
case 3913:
case 1222:
case 1479:
case 796:
case 2128:
case 2233:
case 136:
case 3542:
case 1027:
case 1636:
case 2470:
case 1688:
case 1696:
case 550:
case 891:
case 2805:
case 2293:
case 3949:
case 2335:
case 3794:
case 3199:
case 1017:
case 2771:
case 569:
case 1850:
case 3761:
case 2084:
case 2106:
case 271:
case 1733:
case 1969:
case 3556:
case 747:
case 3330:
case 3390:
case 149:
case 1793:
case 926:
case 2162:
case 931:
case 2423:
case 1440:
case 3475:
case 3172:
case 3207:
case 272:
case 563:
case 43:
case 1432:
case 436:
case 1052:
case 1268:
case 1135:
case 530:
case 3002:
case 2449:
case 421:
case 3121:
case 1914:
case 2076:
case 2859:
case 216:
case 3342:
case 1650:
case 504:
case 3111:
case 2960:
case 1945:
case 1492:
case 1721:
case 1837:
case 813:
case 1290:
case 3929:
case 3735:
case 1711:
case 3795:
case 894:
case 1230:
case 2998:
case 2986:
case 1897:
case 1047:
case 1473:
case 2974:
case 954:
case 2756:
case 1016:
case 2239:
case 3228:
case 3571:
case 1161:
case 2561:
case 1697:
case 3218:
case 3943:
case 3882:
case 3193:
case 3368:
case 525:
case 3364:
case 1270:
case 2471:
case 2713:
case 1053:
case 1433:
case 1877:
case 179:
case 724:
case 2978:
case 242:
case 3787:
case 3224:
case 3775:
case 2723:
case 3968:
case 3591:
case 1515:
case 1732:
case 3957:
case 1544:
case 2144:
case 2994:
case 800:
case 834:
case 2163:
case 2398:
case 2279:
case 2220:
case 3549:
case 4059:
case 496:
case 1918:
case 2646:
case 2791:
case 2827:
case 1314:
case 2731:
case 1411:
case 3495:
case 3942:
case 2210:
case 743:
case 2360:
case 705:
case 1264:
case 852:
case 1928:
case 1345:
case 2036:
case 756:
case 2456:
case 3683:
case 1369:
case 992:
case 3990:
case 888:
case 991:
case 394:
case 319:
case 2088:
case 2846:
case 49:
case 2096:
case 832:
case 3570:
case 3798:
case 2560:
case 265:
case 3009:
case 2995:
case 2442:
case 2719:
case 196:
case 678:
case 4005:
case 1514:
case 3349:
case 826:
case 2729:
case 3738:
case 2852:
case 3215:
case 1962:
case 722:
case 2652:
case 3323:
case 244:
case 2743:
case 19:
case 3179:
case 721:
case 2764:
case 1569:
case 3225:
case 1710:
case 2050:
case 736:
case 1884:
case 1676:
case 1249:
case 3120:
case 3543:
case 473:
case 3478:
case 2232:
case 2468:
case 3889:
case 3110:
case 3601:
case 2961:
case 2292:
case 1779:
case 1651:
case 1174:
case 391:
case 2847:
case 2097:
case 223:
case 3801:
case 3922:
case 3331:
case 3054:
case 2586:
case 1186:
case 1363:
case 1004:
case 1198:
case 1948:
case 3760:
case 1325:
case 2616:
case 1441:
case 3912:
case 2240:
case 1138:
case 2538:
case 3529:
case 1344:
case 1265:
case 229:
case 3494:
case 2037:
case 3752:
case 2838:
case 845:
case 1937:
case 1997:
case 4094:
case 2547:
case 1147:
case 3180:
case 398:
case 809:
case 2904:
case 3664:
case 2898:
case 2674:
case 2886:
case 3619:
case 170:
case 1403:
case 2874:
case 2698:
case 3864:
case 1116:
case 3093:
case 3843:
case 3629:
case 2638:
case 1126:
case 1377:
case 1645:
case 20:
case 1584:
case 310:
case 61:
case 2006:
case 1950:
case 671:
case 2789:
case 3072:
case 537:
case 3726:
case 2062:
case 3021:
case 2267:
case 3405:
case 3277:
case 1152:
case 2552:
case 2317:
case 616:
case 740:
case 2860:
case 3011:
case 1845:
case 1814:
case 3383:
case 2959:
case 3166:
case 307:
case 1780:
case 1576:
case 3823:
case 2875:
case 415:
case 1146:
case 2546:
case 557:
case 1996:
case 1767:
case 2280:
case 1481:
case 1201:
case 2400:
case 235:
case 3251:
case 862:
case 766:
case 1289:
case 3613:
case 1409:
case 1127:
case 78:
case 3039:
case 3665:
case 2905:
case 2517:
case 1117:
case 4095:
case 2018:
case 998:
case 881:
case 1351:
case 1034:
case 1863:
case 1454:
case 1825:
case 2347:
case 3831:
case 3301:
case 3284:
case 3727:
case 220:
case 3041:
case 1815:
case 3891:
case 3158:
case 2007:
case 907:
case 57:
case 511:
case 1844:
case 2508:
case 1094:
case 3746:
case 2177:
case 2202:
case 1577:
case 2482:
case 1615:
case 2326:
case 3167:
case 1644:
case 470:
case 910:
case 4061:
case 3276:
case 2953:
case 3389:
case 2926:
case 2255:
case 3582:
case 903:
case 945:
case 2700:
case 1074:
case 381:
case 3010:
case 3871:
case 1848:
case 1104:
case 2504:
case 3671:
case 3154:
case 2661:
case 3759:
case 3901:
case 3822:
case 2197:
case 1537:
case 3296:
case 362:
case 559:
case 665:
case 1976:
case 1754:
case 2014:
case 2559:
case 1606:
case 1060:
case 2483:
case 3427:
case 3704:
case 2203:
case 278:
case 1662:
case 3417:
case 938:
case 546:
case 1388:
case 1396:
case 1806:
case 2150:
case 4087:
case 166:
case 1984:
case 685:
case 3500:
case 2069:
case 295:
case 3181:
case 1818:
case 533:
case 958:
case 580:
case 46:
case 364:
case 4060:
case 961:
case 2505:
case 962:
case 715:
case 2359:
case 3092:
case 128:
case 1703:
case 3830:
case 982:
case 1350:
case 3642:
case 345:
case 303:
case 898:
case 1588:
case 597:
case 1596:
case 2946:
case 560:
case 3237:
case 1087:
case 1075:
case 3890:
case 3416:
case 1153:
case 2553:
case 641:
case 2209:
case 2878:
case 807:
case 3868:
case 3657:
case 3382:
case 810:
case 2908:
case 3857:
case 3668:
case 2894:
case 3705:
case 2678:
case 2015:
case 1755:
case 1807:
case 3250:
case 4038:
case 770:
case 2281:
case 2304:
case 338:
case 2025:
case 2401:
case 835:
case 2288:
case 1029:
case 4031:
case 2812:
case 1693:
case 261:
case 118:
case 3504:
case 2671:
case 3947:
case 1980:
case 579:
case 2236:
case 2759:
case 2901:
case 3916:
case 1833:
case 281:
case 1064:
case 2989:
case 3353:
case 3861:
case 2010:
case 282:
case 1043:
case 2020:
case 1205:
case 1477:
case 1485:
case 167:
case 4023:
case 3150:
case 763:
case 190:
case 1611:
case 395:
case 2079:
case 4013:
case 3782:
case 1872:
case 3835:
case 3952:
case 3024:
case 1737:
case 1902:
case 1355:
case 1672:
case 704:
case 2417:
case 789:
case 783:
case 3014:
case 4049:
case 1966:
case 3559:
case 187:
case 1797:
case 2109:
case 3483:
case 2704:
case 3203:
case 3895:
case 284:
case 3946:
case 596:
case 619:
case 1023:
case 490:
case 2890:
case 1065:
case 1699:
case 694:
case 1204:
case 1381:
case 1639:
case 1484:
case 1013:
case 1476:
case 1309:
case 3359:
case 2842:
case 4070:
case 2155:
case 1555:
case 264:
case 1049:
case 487:
case 3505:
case 3917:
case 1451:
case 2250:
case 1354:
case 1031:
case 3281:
case 3304:
case 3834:
case 3025:
case 2073:
case 4019:
case 2857:
case 3894:
case 3678:
case 1091:
case 1841:
case 978:
case 80:
case 806:
case 3878:
case 4064:
case 1641:
case 995:
case 2416:
case 1259:
case 3553:
case 1736:
case 3489:
case 1503:
case 3634:
case 3209:
case 652:
case 1820:
case 2629:
case 1217:
case 935:
case 1784:
case 1227:
case 1071:
case 2589:
case 1189:
case 3874:
case 3686:
case 3698:
case 275:
case 3516:
case 1610:
case 2501:
case 1022:
case 4057:
case 2819:
case 298:
case 3904:
case 3151:
case 3674:
case 3048:
case 3886:
case 1012:
case 2752:
case 2829:
case 1358:
case 425:
case 1679:
case 469:
case 2011:
case 617:
case 1751:
case 1909:
case 2870:
case 3701:
case 3327:
case 2383:
case 1566:
case 2166:
case 3176:
case 2747:
case 2021:
case 2405:
case 2102:
case 2277:
case 4042:
case 948:
case 3317:
case 4030:
case 2726:
case 536:
case 1208:
case 634:
case 1488:
case 2670:
case 355:
case 404:
case 1056:
case 1879:
case 210:
case 3006:
case 4090:
case 3789:
case 543:
case 3905:
case 2849:
case 3517:
case 55:
case 3675:
case 3352:
case 1640:
case 1302:
case 1832:
case 3018:
case 1226:
case 1955:
case 1042:
case 1892:
case 3527:
case 3028:
case 549:
case 1247:
case 3280:
case 1692:
case 787:
case 183:
case 2813:
case 335:
case 2251:
case 1090:
case 2823:
case 1840:
case 3875:
case 2649:
case 2865:
case 556:
case 1785:
case 3546:
case 189:
case 4056:
case 1673:
case 3316:
case 718:
case 626:
case 2276:
case 3953:
case 2389:
case 3266:
case 2746:
case 3202:
case 3177:
case 2691:
case 878:
case 2167:
case 4071:
case 632:
case 2041:
case 2891:
case 2158:
case 895:
case 3007:
case 4022:
case 2717:
case 3508:
case 1437:
case 1497:
case 125:
case 348:
case 2404:
case 1380:
case 4012:
case 62:
case 2284:
case 2727:
case 320:
case 3783:
case 2173:
case 1573:
case 3934:
case 2269:
case 3163:
case 3422:
case 3279:
case 2531:
case 2319:
case 1448:
case 712:
case 1941:
case 1191:
case 3115:
case 2591:
case 408:
case 1667:
case 2329:
case 3808:
case 3338:
case 3144:
case 3994:
case 985:
case 3765:
case 1320:
case 2343:
case 3978:
case 2775:
case 2224:
case 3723:
case 3608:
case 2461:
case 1260:
case 3471:
case 3713:
case 944:
case 2565:
case 1165:
case 56:
case 2523:
case 1123:
case 3575:
case 3587:
case 1462:
case 684:
case 294:
case 586:
case 1113:
case 14:
case 213:
case 153:
case 3456:
case 2683:
case 1406:
case 439:
case 1298:
case 1286:
case 2192:
case 3827:
case 2495:
case 2942:
case 3210:
case 1725:
case 1939:
case 2370:
case 929:
case 923:
case 1744:
case 3220:
case 497:
case 2435:
case 3646:
case 1715:
case 3791:
case 2132:
case 1532:
case 1579:
case 459:
case 2263:
case 3169:
case 2956:
case 3273:
case 2774:
case 2225:
case 1666:
case 133:
case 180:
case 139:
case 2215:
case 1602:
case 1340:
case 3652:
case 941:
case 344:
case 3743:
case 44:
case 453:
case 1802:
case 446:
case 2349:
case 3124:
case 540:
case 2738:
case 3852:
case 3145:
case 2570:
case 3560:
case 365:
case 2009:
case 3995:
case 1911:
case 3719:
case 1392:
case 1866:
case 3240:
case 1287:
case 1275:
case 1724:
case 1407:
case 1129:
case 2391:
case 3457:
case 3626:
case 329:
case 1880:
case 2519:
case 2434:
case 661:
case 2922:
case 1714:
case 3598:
case 108:
case 2110:
case 1510:
case 2889:
case 681:
case 3647:
case 3816:
case 1164:
case 1769:
case 1933:
case 1993:
case 1520:
case 2120:
case 2543:
case 682:
case 2478:
case 3826:
case 2474:
case 3464:
case 972:
case 3730:
case 231:
case 708:
case 3790:
case 2067:
case 3443:
case 47:
case 91:
case 374:
case 476:
case 4001:
case 3107:
case 2991:
case 3429:
case 570:
case 1718:
case 2262:
case 2058:
case 844:
case 2931:
case 2322:
case 2498:
case 1728:
case 1973:
case 3419:
case 1321:
case 1424:
case 1855:
case 3118:
case 515:
case 3805:
case 3293:
case 2949:
case 2794:
case 3335:
case 3757:
case 2139:
case 3128:
case 2734:
case 1311:
case 1142:
case 780:
case 2460:
case 1083:
case 1992:
case 3470:
case 2530:
case 2356:
case 797:
case 1469:
case 193:
case 2913:
case 1655:
case 1372:
case 199:
case 114:
case 254:
case 3768:
case 3987:
case 3975:
case 2590:
case 157:
case 2342:
case 74:
case 1511:
case 607:
case 1748:
case 1681:
case 2970:
case 437:
case 1278:
case 3712:
case 4083:
case 3535:
case 1521:
case 3162:
case 3423:
case 2487:
case 372:
case 3771:
case 2761:
case 200:
case 3084:
case 3106:
case 414:
case 1881:
case 1234:
case 610:
case 3413:
case 2800:
case 2330:
case 1979:
case 746:
case 31:
case 252:
case 1920:
case 1593:
case 2193:
case 2368:
case 3974:
case 251:
case 111:
case 3756:
case 3239:
case 2228:
case 17:
case 3604:
case 2571:
case 1171:
case 1654:
case 1706:
case 3334:
case 288:
case 3998:
case 3986:
case 1122:
case 2522:
case 1463:
case 2919:
case 3938:
case 1415:
case 2682:
case 2512:
case 1112:
case 1812:
case 2029:
case 438:
case 1288:
case 608:
case 2554:
case 1671:
case 2980:
case 218:
case 3098:
case 3104:
case 3848:
case 3709:
case 1871:
case 2750:
case 1010:
case 1622:
case 2064:
case 2303:
case 2833:
case 3648:
case 3074:
case 2485:
case 1612:
case 2477:
case 2182:
case 2893:
case 1020:
case 928:
case 182:
case 940:
case 484:
case 1856:
case 633:
case 680:
case 2100:
case 2611:
case 1500:
case 290:
case 4040:
case 366:
case 3550:
case 3336:
case 3862:
case 2621:
case 445:
case 403:
case 2355:
case 1417:
case 2672:
case 2902:
case 2821:
case 2737:
case 4092:
case 36:
case 2811:
case 4032:
case 2070:
case 697:
case 1656:
case 2509:
case 1427:
case 464:
case 2797:
case 3606:
case 2966:
case 386:
case 2253:
case 3976:
case 2065:
case 3618:
case 4079:
case 103:
case 1753:
case 145:
case 1642:
case 707:
case 2484:
case 653:
case 1830:
case 1300:
case 3628:
case 2639:
case 328:
case 3703:
case 2204:
case 646:
case 710:
case 1092:
case 2839:
case 3828:
case 2309:
case 3466:
case 1630:
case 2476:
case 585:
case 1690:
case 3105:
case 3402:
case 2899:
case 2049:
case 1032:
case 2555:
case 462:
case 775:
case 3480:
case 2354:
case 461:
case 3337:
case 2841:
case 96:
case 458:
case 2091:
case 986:
case 1705:
case 1668:
case 1857:
case 98:
case 3607:
case 2967:
case 1657:
case 1382:
case 1868:
case 4010:
case 798:
case 529:
case 3153:
case 2736:
case 4020:
case 2259:
case 3385:
case 2367:
case 202:
case 1629:
case 2217:
case 1843:
case 612:
case 1033:
case 738:
case 3116:
case 2189:
case 611:
case 2071:
case 67:
case 370:
case 3283:
case 2784:
case 3551:
case 676:
case 2776:
case 3147:
case 1180:
case 2954:
case 2610:
case 1501:
case 2101:
case 3997:
case 3937:
case 840:
case 2358:
case 3702:
case 527:
case 2620:
case 1643:
case 2012:
case 3780:
case 3576:
case 107:
case 1166:
case 2566:
case 1383:
case 703:
case 3845:
case 657:
case 2751:
case 1011:
case 2679:
case 3035:
case 784:
case 1277:
case 1021:
case 2488:
case 2208:
case 1072:
case 3614:
case 3950:
case 3584:
case 110:
case 2056:
case 1716:
case 2879:
case 315:
case 3869:
case 1670:
case 269:
case 2226:
case 2302:
case 2640:
case 571:
case 1623:
case 407:
case 1665:
case 0:
case 1459:
case 2892:
case 2183:
case 3127:
case 2042:
case 263:
case 3289:
case 4072:
case 2450:
case 1251:
case 1813:
case 230:
case 3384:
case 3936:
case 2247:
case 2632:
case 3988:
case 3996:
case 289:
case 3146:
case 2777:
case 1865:
case 970:
case 1823:
case 614:
case 1276:
case 2903:
case 758:
case 2068:
case 86:
case 1167:
case 1691:
case 3615:
case 762:
case 915:
case 2437:
case 3108:
case 3844:
case 1717:
case 782:
case 3815:
case 1158:
case 88:
case 1284:
case 2380:
case 2873:
case 3825:
case 225:
case 3863:
case 3351:
case 2497:
case 1531:
case 3563:
case 751:
case 1173:
case 3525:
case 996:
case 1957:
case 2667:
case 3732:
case 3907:
case 2858:
case 3685:
case 3677:
case 752:
case 1787:
case 856:
case 1343:
case 2320:
case 3885:
case 99:
case 3877:
case 3493:
case 2867:
case 2310:
case 1214:
case 3053:
case 1245:
case 1364:
case 1003:
case 1461:
case 119:
case 1140:
case 2540:
case 2238:
case 3472:
case 3229:
case 1990:
case 2379:
case 1930:
case 3219:
case 2113:
case 24:
case 347:
case 2939:
case 2532:
case 1055:
case 734:
case 1435:
case 3918:
case 595:
case 3324:
case 2744:
case 3243:
case 3676:
case 280:
case 3231:
case 1313:
case 2666:
case 3710:
case 1225:
case 667:
case 1263:
case 690:
case 419:
case 1179:
case 39:
case 973:
case 413:
case 2340:
case 3962:
case 3291:
case 1215:
case 239:
case 1738:
case 1349:
case 2332:
case 3499:
case 754:
case 3514:
case 3439:
case 2392:
case 260:
case 3876:
case 687:
case 1786:
case 2170:
case 4055:
case 732:
case 83:
case 1391:
case 3344:
case 3138:
case 1529:
case 3441:
case 2724:
case 2275:
case 1760:
case 2373:
case 3851:
case 3198:
case 3363:
case 2745:
case 3186:
case 1801:
case 1689:
case 1054:
case 2714:
case 1331:
case 618:
case 1434:
case 1519:
case 191:
case 3174:
case 72:
case 3651:
case 822:
case 2680:
case 1971:
case 1889:
case 1110:
case 821:
case 192:
case 4003:
case 1478:
case 1543:
case 1120:
case 2520:
case 3249:
case 2993:
case 836:
case 2803:
case 2295:
case 131:
case 452:
case 1474:
case 905:
case 3420:
case 95:
case 943:
case 132:
case 3178:
case 896:
case 2393:
case 1058:
case 1262:
case 1141:
case 488:
case 1438:
case 1991:
case 89:
case 4080:
case 3799:
case 3194:
case 3008:
case 956:
case 3925:
case 3348:
case 3256:
case 2728:
case 3963:
case 791:
case 1486:
case 1931:
case 1498:
case 3017:
case 50:
case 2599:
case 1199:
case 1949:
case 3518:
case 2424:
case 322:
case 3696:
case 2992:
case 3271:
case 237:
case 3027:
case 2261:
case 2142:
case 1542:
case 336:
case 663:
case 1734:
case 2539:
case 3528:
case 2414:
case 3222:
case 3836:
case 3306:
case 1530:
case 630:
case 683:
case 1778:
case 1965:
case 2190:
case 1590:
case 3212:
case 2940:
case 3888:
case 3046:
case 3362:
case 214:
case 3896:
case 154:
case 299:
case 2655:
case 2372:
case 2681:
case 2809:
case 3328:
case 2339:
case 1970:
case 2748:
case 1111:
case 1066:
case 3650:
case 356:
case 117:
case 257:
case 2521:
case 719:
case 3135:
case 3924:
case 3052:
case 535:
case 873:
case 2399:
case 2278:
case 1172:
case 2572:
case 3440:
case 3562:
case 134:
case 2294:
case 349:
case 1800:
case 2979:
case 1330:
case 3733:
case 2156:
case 3969:
case 2234:
case 454:
case 2609:
case 3506:
case 100:
case 1761:
case 426:
case 2593:
case 602:
case 3026:
case 548:
case 212:
case 520:
case 1218:
case 3637:
case 3697:
case 2910:
case 2706:
case 3161:
case 2089:
case 1571:
case 601:
case 27:
case 1964:
case 432:
case 2533:
case 1133:
case 151:
case 211:
case 1919:
case 2425:
case 2854:
case 276:
case 2001:
case 1080:
case 2463:
case 3047:
case 922:
case 3548:
case 188:
case 1795:
case 1735:
case 3307:
case 3721:
case 921:
case 324:
case 3973:
case 1419:
case 2348:
case 2925:
case 2256:
case 1534:
case 2963:
case 3603:
case 3718:
case 3541:
case 1272:
case 2507:
case 2915:
case 833:
case 2944:
case 2008:
case 729:
case 174:
case 2420:
case 1443:
case 2178:
case 897:
case 598:
case 3168:
case 860:
case 3393:
case 3333:
case 1211:
case 3295:
case 127:
case 1853:
case 3190:
case 1768:
case 1975:
case 1987:
case 4084:
case 2888:
case 471:
case 314:
case 2896:
case 97:
case 41:
case 507:
case 2222:
case 2479:
case 393:
case 2836:
case 3130:
case 472:
case 912:
case 765:
case 3992:
case 3445:
case 1470:
case 337:
case 3142:
case 3539:
case 1128:
case 2017:
case 1757:
case 744:
case 976:
case 1118:
case 3855:
case 510:
case 2741:
case 3707:
case 25:
case 11:
case 3979:
case 2733:
case 2969:
case 3156:
case 171:
case 3881:
case 3609:
case 205:
case 1106:
case 2506:
case 1659:
case 1084:
case 2850:
case 615:
case 3572:
case 1241:
case 1162:
case 2562:
case 3294:
case 2793:
case 249:
case 3521:
case 1535:
case 2135:
case 2268:
case 1712:
case 3399:
case 3681:
case 3809:
case 2328:
case 3339:
case 2195:
case 116:
case 1076:
case 1859:
case 2914:
case 1394:
case 3112:
case 853:
case 84:
case 2307:
case 2721:
case 3444:
case 224:
case 3341:
case 3425:
case 3001:
case 2047:
case 277:
case 1986:
case 1431:
case 1998:
case 1334:
case 2697:
case 3706:
case 3654:
case 3171:
case 1604:
case 1239:
case 670:
case 2016:
case 1756:
case 4077:
case 3533:
case 4085:
case 311:
case 914:
case 3593:
case 1378:
case 427:
case 993:
case 312:
case 846:
case 2637:
case 3310:
case 2433:
case 939:
case 1374:
case 3260:
case 1608:
case 2740:
case 1723:
case 1765:
case 857:
case 1978:
case 279:
case 2877:
case 3658:
case 2493:
case 3867:
case 960:
case 1749:
case 2544:
case 1144:
case 1808:
case 1338:
case 2732:
case 2515:
case 2677:
case 3941:
case 3448:
case 2792:
case 1279:
case 429:
case 1163:
case 3573:
case 4037:
case 2525:
case 1791:
case 1646:
case 2324:
case 3744:
case 2421:
case 2345:
case 2928:
case 812:
case 3763:
case 71:
case 3725:
case 3274:
case 1210:
case 2314:
case 1731:
case 3592:
case 1827:
case 3406:
case 1456:
case 353:
case 716:
case 1096:
case 485:
case 1846:
case 359:
case 3462:
case 876:
case 1587:
case 2175:
case 2229:
case 2514:
case 584:
case 2439:
case 509:
case 3866:
case 1719:
case 2059:
case 1995:
case 2160:
case 1145:
case 1852:
case 1729:
case 3418:
case 503:
case 2499:
case 3921:
case 1743:
case 1387:
case 1375:
case 3972:
case 1490:
case 2884:
case 1430:
case 68:
case 2710:
case 1050:
case 564:
case 1273:
case 3000:
case 2569:
case 3579:
case 666:
case 1468:
case 1826:
case 538:
case 3143:
case 3520:
case 94:
case 2249:
case 441:
case 1574:
case 3769:
case 3164:
case 959:
case 2779:
case 1292:
case 1961:
case 3510:
case 1616:
case 2948:
case 899:
case 2851:
case 2363:
case 2213:
case 3714:
case 1847:
case 3880:
case 3119:
case 1037:
case 1626:
case 2315:
case 1457:
case 893:
case 1538:
case 2138:
case 1240:
case 2223:
case 3724:
case 526:
case 2937:
case 2702:
case 3246:
case 3620:
case 420:
case 1674:
case 1898:
case 1904:
case 3776:
case 3580:
case 3022:
case 3610:
case 2997:
case 989:
case 1698:
case 3810:
case 270:
case 2283:
case 2061:
case 3227:
case 3784:
case 2377:
case 2385:
case 2126:
case 302:
case 3217:
case 52:
case 3820:
case 983:
case 1789:
case 2950:
case 65:
case 1006:
case 643:
case 3056:
case 3879:
case 1660:
case 215:
case 2869:
case 2645:
case 3488:
case 3496:
case 2624:
case 3208:
case 649:
case 1346:
case 435:
case 1258:
case 1317:
case 2455:
case 2152:
case 1552:
case 925:
case 4028:
case 2576:
case 1176:
case 3909:
case 2845:
case 2669:
case 1860:
case 656:
case 2767:
case 40:
case 2988:
case 2996:
case 389:
case 2146:
case 3777:
case 304:
case 901:
case 455:
case 4006:
case 1887:
case 3090:
case 3030:
case 3450:
case 63:
case 330:
case 3247:
case 3692:
case 1028:
case 795:
case 636:
case 3183:
case 363:
case 2376:
case 3955:
case 369:
case 3226:
case 1018:
case 2758:
case 3302:
case 3832:
case 1675:
case 1687:
case 406:
case 7:
case 1905:
case 1517:
case 3380:
case 1347:
case 148:
case 552:
case 2454:
case 325:
case 2351:
case 3437:
case 2108:
case 2094:
case 551:
case 2844:
case 3057:
case 568:
case 3068:
case 3252:
case 887:
case 588:
case 2644:
case 3567:
case 1482:
case 2577:
case 2585:
case 1185:
case 1266:
case 1953:
case 3903:
case 1316:
case 2625:
case 3477:
case 3043:
case 2467:
case 748:
case 1861:
case 3064:
case 1700:
case 2597:
case 3019:
case 4044:
case 1947:
case 2098:
case 2086:
case 2848:
case 4015:
case 2951:
case 804:
case 2709:
case 830:
case 3693:
case 4025:
case 26:
case 696:
case 178:
case 1203:
case 3509:
case 387:
case 2606:
case 3966:
case 3253:
case 519:
case 2976:
case 3355:
case 3672:
case 3821:
case 3737:
case 1952:
case 1305:
case 2396:
case 2862:
case 3872:
case 825:
case 1782:
case 1:
case 3581:
case 1069:
case 3611:
case 28:
case 390:
case 1150:
case 2550:
case 2806:
case 367:
case 4014:
case 1917:
case 2402:
case 801:
case 4045:
case 4024:
case 1359:
case 1927:
case 2828:
case 3309:
case 2536:
case 1136:
case 4:
case 3013:
case 2350:
case 3484:
case 3639:
case 3204:
case 3065:
case 2075:
case 2087:
case 2618:
case 495:
case 1946:
case 4069:
case 2596:
case 1196:
case 1188:
case 2153:
case 3259:
case 3641:
case 2607:
case 967:
case 1694:
case 679:
case 2807:
case 3958:
case 2337:
case 1015:
case 591:
case 1908:
case 2200:
case 1401:
case 1834:
case 1063:
case 3451:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753682401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,];
var gg_b = "1753682401/";

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
